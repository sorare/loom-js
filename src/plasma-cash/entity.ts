import BN from 'bn.js'
import Web3 from 'web3'

import {
  EthereumPlasmaClient,
  IPlasmaCoin,
  IPlasmaDeposit,
  IPlasmaExitData,
  marshalDepositEvent
} from './ethereum-client'
import { Address, LocalAddress } from '../address'
import { DAppChainPlasmaClient } from './dappchain-client'
import { PlasmaCashTx } from './plasma-cash-tx'
import { OfflineWeb3Signer } from '../solidity-helpers'
import { Account } from 'web3/eth/accounts'
import { CachedDAppChainPlasmaClient } from './cached-dappchain-client'
import { PlasmaDB } from './db'

export interface IProofs {
  inclusion: { [blockNumber: string]: string }
  exclusion: { [blockNumber: string]: string }
  transactions: { [blockNumber: string]: PlasmaCashTx }
}

export interface IEntityParams {
  /** Web3 account for use on Ethereum */
  ethAccount: Account
  ethPlasmaClient: EthereumPlasmaClient
  dAppPlasmaClient: CachedDAppChainPlasmaClient
  /** Allows to override the amount of gas used when sending txs to Ethereum. */
  defaultGas?: string | number
  childBlockInterval: number
}

export interface IWeb3EventSub {
  unsubscribe(callback?: (error: Error, result: boolean) => void): void
}

// TODO: Maybe come up with a better name?
/**
 * Manages Plasma Cash related interactions between an Ethereum network (Ganache, Mainnet, etc.)
 * and a Loom DAppChain from the point of view of a single entity. An entity has two identities, one
 * on Ethereum, and one on the DAppChain, each identity has its own private/public key pair.
 */
export class Entity {
  private _web3: Web3
  // web3 account
  private _ethAccount: Account
  public _dAppPlasmaClient: CachedDAppChainPlasmaClient
  private _ethPlasmaClient: EthereumPlasmaClient
  private _defaultGas?: string | number
  private _childBlockInterval: number

  get database(): PlasmaDB {
    return this._dAppPlasmaClient.database
  }

  get ethAddress(): string {
    return this._ethAccount.address
  }

  get ethAccount(): Account {
    return this._ethAccount
  }

  get plasmaCashContract(): any {
    return this._ethPlasmaClient.plasmaCashContract
  }

  constructor(web3: Web3, params: IEntityParams) {
    this._web3 = web3
    this._ethAccount = params.ethAccount
    this._ethPlasmaClient = params.ethPlasmaClient
    this._dAppPlasmaClient = params.dAppPlasmaClient
    this._defaultGas = params.defaultGas
    this._childBlockInterval = params.childBlockInterval
  }

  // This should be called whenever a new block gets received
  // if there is no database we should not allow this to be called
  async refreshAsync() {
    // Get all coins as the dappchain says
    const coins = Array.from(new Set(await this.getUserCoinsAsync()))

    // For each coin we got from the dappchain
    // coins.forEach(async coin => {
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      // Skip any coins that have been exited
      if (coin.contractAddress === '0x0000000000000000000000000000000000000000') continue

      // @ts-ignore
      const localSlots = this._dAppPlasmaClient.getAllCoins()

      // If it's an empty list just add the coin
      if (localSlots.length === 0) {
        const blocks = await this.getBlockNumbersAsync(coin.depositBlockNum)
        const proofs = await this.getCoinHistoryAsync(coin.slot, blocks)
        continue
      }

      // Otherwise check for each coin that's not incldued and include that.
      localSlots.forEach(async (s: BN) => {
        if (s.cmp(coin.slot) !== 0) {
          const blocks = await this.getBlockNumbersAsync(coin.depositBlockNum)
          const proofs = await this.getCoinHistoryAsync(coin.slot, blocks)
        }
      })
    }
  }

  async transferTokenAsync(params: {
    slot: BN
    prevBlockNum: BN
    denomination: BN | number
    newOwner: string
  }) {
    const { slot, prevBlockNum, denomination, newOwner } = params
    const tx = new PlasmaCashTx({
      slot,
      prevBlockNum,
      denomination,
      newOwner,
      prevOwner: this.ethAddress
    })
    await tx.signAsync(new OfflineWeb3Signer(this._web3, this._ethAccount))
    await this._dAppPlasmaClient.sendTxAsync(tx)
  }

  getPlasmaTxAsync(slot: BN, blockNumber: BN): Promise<PlasmaCashTx> {
    return this._dAppPlasmaClient.getPlasmaTxAsync(slot, blockNumber)
  }

  getExitAsync(slot: BN): Promise<IPlasmaExitData> {
    return this._ethPlasmaClient.getExitAsync({ slot, from: this.ethAddress })
  }

  getCurrentBlockAsync(): Promise<BN> {
    return this._dAppPlasmaClient.getCurrentPlasmaBlockNumAsync()
  }

  getPlasmaCoinAsync(slot: BN): Promise<IPlasmaCoin> {
    return this._ethPlasmaClient.getPlasmaCoinAsync({ slot, from: this.ethAddress })
  }

  getBlockRootAsync(blockNumber: BN): Promise<string> {
    return this._ethPlasmaClient.getBlockRootAsync({ blockNumber, from: this.ethAddress })
  }

  async getUserCoinsAsync(): Promise<IPlasmaCoin[]> {
    const addr = new Address('eth', LocalAddress.fromHexString(this.ethAddress))
    const slots = await this._dAppPlasmaClient.getUserSlotsAsync(addr)

    const coins = slots.map(s => this.getPlasmaCoinAsync(s))
    return await Promise.all(coins)
  }

  checkMembershipAsync(leaf: string, root: string, slot: BN, proof: string): Promise<boolean> {
    return this._ethPlasmaClient.checkMembershipAsync({
      leaf,
      root,
      slot,
      proof,
      from: this.ethAddress
    })
  }

  async submitPlasmaBlockAsync(): Promise<BN> {
    await this._dAppPlasmaClient.debugFinalizeBlockAsync()
    const blockNum = await this._dAppPlasmaClient.getCurrentPlasmaBlockNumAsync()
    const block = await this._dAppPlasmaClient.getPlasmaBlockAtAsync(blockNum)
    await this._ethPlasmaClient.debugSubmitBlockAsync({ block, from: this.ethAddress })
    return blockNum
  }

  submitPlasmaDepositAsync(deposit: IPlasmaDeposit): Promise<void> {
    return this._dAppPlasmaClient.debugSubmitDepositAsync(deposit)
  }

  async startExitAsync(params: { slot: BN; prevBlockNum: BN; exitBlockNum: BN }): Promise<object> {
    const { slot, prevBlockNum, exitBlockNum } = params

    // In case the sender is exiting a Deposit transaction, they should just create a signed
    // transaction to themselves. There is no need for a merkle proof.
    if (exitBlockNum.modn(this._childBlockInterval) !== 0) {
      const exitTx = new PlasmaCashTx({
        slot,
        prevBlockNum: new BN(0),
        denomination: 1,
        newOwner: this.ethAddress
      })
      await exitTx.signAsync(new OfflineWeb3Signer(this._web3, this._ethAccount))
      return this._ethPlasmaClient.startExitAsync({
        slot,
        exitTx,
        exitBlockNum,
        from: this.ethAddress,
        gas: this._defaultGas
      })
    }

    const exitTx = await this.getPlasmaTxAsync(slot, exitBlockNum)
    if (!exitTx) {
      throw new Error(`Invalid exit block: missing tx for slot ${slot.toString(10)}.`)
    }
    const prevTx = await this.getPlasmaTxAsync(slot, prevBlockNum)
    if (!prevTx) {
      throw new Error(`Invalid prev block: missing tx for slot ${slot.toString(10)}.`)
    }
    return this._ethPlasmaClient.startExitAsync({
      slot,
      prevTx,
      exitTx,
      prevBlockNum,
      exitBlockNum,
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }

  finalizeExitsAsync(): Promise<object> {
    return this._ethPlasmaClient.finalizeExitsAsync({
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }

  /**
   * @return Web3 subscription object that can be passed to stopWatching().
   */
  watchExit(slot: BN, fromBlock: BN): IWeb3EventSub {
    console.log(`Started watching events for Coin ${slot}`)
    return this.plasmaCashContract.events
      .StartedExit({
        filter: { slot: slot },
        fromBlock: fromBlock
      })
      .on('data', (event: any, err: any) => {
        this.challengeExitAsync(slot, event.returnValues.owner)
      })
      .on('error', (err: any) => console.log(err))
  }

  /**
   * @return Web3 subscription object that can be passed to stopWatching().
   */
  watchChallenge(slot: BN, fromBlock: BN): IWeb3EventSub {
    console.log(`Started watching challenges for Coin ${slot}`)
    return this.plasmaCashContract.events
      .ChallengedExit({
        filter: { slot: slot },
        fromBlock: fromBlock
      })
      .on('data', (event: any, err: any) => {
        this.respondChallengeAsync(
          slot,
          event.returnValues.txHash,
          event.returnValues.challengingBlockNumber
        )
      })
      .on('error', (err: any) => console.log(err))
  }

  async challengeExitAsync(slot: BN, owner: String) {
    if (owner === this.ethAddress) {
      console.log('Exit is valid, continuing...')
      return
    } else {
      console.log('FOUND EXIT! CHALLENGING!!')
    }

    const coin = await this.getPlasmaCoinAsync(slot)
    const blocks = await this.getBlockNumbersAsync(coin.depositBlockNum)
    const proofs = await this.getCoinHistoryAsync(slot, blocks)
    const exit = await this.getExitAsync(slot)
    for (let i in blocks) {
      const blk = blocks[i]
      if (!(blk.toString() in proofs.inclusion)) {
        continue
      }
      if (blk.gt(exit.exitBlock)) {
        console.log('Challenge Spent Coin!')
        await this.challengeAfterAsync({ slot: slot, challengingBlockNum: blk })
        break
      } else if (exit.prevBlock.lt(blk) && blk.lt(exit.exitBlock)) {
        console.log('Challenge Double Spend!!')
        await this.challengeBetweenAsync({ slot: slot, challengingBlockNum: blk })
        break
      } else if (blk.lt(exit.prevBlock)) {
        console.log('Challenge Invalid History!')
        const tx = await this.getPlasmaTxAsync(slot, blk)
        await this.challengeBeforeAsync({
          slot: slot,
          prevBlockNum: tx.prevBlockNum,
          challengingBlockNum: blk
        })
        break
      }
    }
  }

  async respondChallengeAsync(slot: BN, txHash: string, challengingBlockNum: BN) {
    const coin = await this.getPlasmaCoinAsync(slot)
    const blocks = await this.getBlockNumbersAsync(coin.depositBlockNum)
    // We challenge with the block that includes a transaction right after the challenging block
    const proofs = await this.getCoinHistoryAsync(slot, blocks)
    for (let i in blocks) {
      const blk = blocks[i]
      // check only inclusion blocks
      if (!(blk.toString() in proofs.inclusion)) {
        continue
      }
      // challenge with the first block after the challengingBlock
      if (blk.gt(new BN(challengingBlockNum))) {
        await this.respondChallengeBeforeAsync({
          slot,
          challengingTxHash: txHash,
          respondingBlockNum: blk
        })
        break
      }
    }
  }

  async getCoinHistoryAsync(slot: BN, blockNumbers: BN[]): Promise<IProofs> {
    const inclProofs: { [blockNumber: string]: string } = {}
    const exclProofs: { [blockNumber: string]: string } = {}
    const txs: { [blockNumber: string]: PlasmaCashTx } = {}

    for (let i in blockNumbers) {
      const blockNumber = blockNumbers[i]
      const root = await this.getBlockRootAsync(blockNumber)

      const tx = await this.getPlasmaTxAsync(slot, blockNumber)

      txs[blockNumber.toString()] = tx
      const included = await this.checkInclusionAsync(tx, root, slot, tx.proof)
      if (included) {
        inclProofs[blockNumber.toString()] = tx.proof
      } else {
        exclProofs[blockNumber.toString()] = tx.proof
      }
    }
    return {
      exclusion: exclProofs,
      inclusion: inclProofs,
      transactions: txs
    }
  }

  async verifyCoinHistoryAsync(slot: BN, proofs: IProofs): Promise<boolean> {
    // Check inclusion proofs
    for (let p in proofs.inclusion) {
      const blockNumber = new BN(p)
      const tx = proofs.transactions[p] // get the block number from the proof of inclusion and get the tx from that
      const root = await this.getBlockRootAsync(blockNumber)
      const included = await this.checkInclusionAsync(tx, root, slot, proofs.inclusion[p])
      if (!included) {
        return false
      }
    }

    // Check exclusion proofs
    for (let p in proofs.exclusion) {
      const blockNumber = new BN(p)
      const root = await this.getBlockRootAsync(blockNumber)
      const excluded = await this.checkExclusionAsync(root, slot, proofs.exclusion[p])
      if (!excluded) {
        return false
      }
    }
    return true
  }

  async checkExclusionAsync(root: string, slot: BN, proof: string): Promise<boolean> {
    // keccak(uint256(0))
    const emptyHash = '0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563'
    const ret = await this.checkMembershipAsync(emptyHash, root, slot, proof)
    return ret
  }

  async checkInclusionAsync(
    tx: PlasmaCashTx,
    root: string,
    slot: BN,
    proof: string
  ): Promise<boolean> {
    let ret
    if (tx.prevBlockNum.eq(new BN(0))) {
      ret = tx.hash === root
    } else {
      ret = await this.checkMembershipAsync(tx.hash, root, slot, proof)
    }
    return ret
  }

  async getDepositEvents(fromBlock?: BN, all?: boolean): Promise<IPlasmaDeposit[]> {
    const filter = !all ? { from: this.ethAddress } : {}
    const events: any[] = await this.plasmaCashContract.getPastEvents('Deposit', {
      filter: filter,
      fromBlock: fromBlock ? fromBlock : 0
    })
    const deposits = events.map<IPlasmaDeposit>(e => marshalDepositEvent(e.returnValues))
    return deposits
  }

  async getBlockNumbersAsync(startBlock: any): Promise<BN[]> {
    const endBlock: BN = await this.getCurrentBlockAsync()
    const blockNumbers: BN[] = [startBlock]
    const nextNonDepositBlock: BN = new BN(
      Math.ceil(startBlock / this._childBlockInterval) * this._childBlockInterval
    )
    if (nextNonDepositBlock.lt(endBlock)) {
      const interval = new BN(this._childBlockInterval)
      for (let i: BN = nextNonDepositBlock; i.lte(endBlock); i = i.add(interval)) {
        blockNumbers.push(i)
      }
    }
    return blockNumbers
  }

  stopWatching(filter: IWeb3EventSub) {
    filter.unsubscribe()
  }

  withdrawAsync(slot: BN): Promise<object> {
    return this._ethPlasmaClient.withdrawAsync({
      slot,
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }

  withdrawBondsAsync(): Promise<object> {
    return this._ethPlasmaClient.withdrawBondsAsync({
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }

  async challengeAfterAsync(params: { slot: BN; challengingBlockNum: BN }): Promise<object> {
    const { slot, challengingBlockNum } = params
    const challengingTx = await this.getPlasmaTxAsync(slot, challengingBlockNum)
    if (!challengingTx) {
      throw new Error(`Invalid challenging block: missing tx for slot ${slot.toString(10)}.`)
    }
    return this._ethPlasmaClient.challengeAfterAsync({
      slot,
      challengingBlockNum,
      challengingTx,
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }

  async challengeBetweenAsync(params: { slot: BN; challengingBlockNum: BN }): Promise<object> {
    const { slot, challengingBlockNum } = params
    const challengingTx = await this.getPlasmaTxAsync(slot, challengingBlockNum)
    if (!challengingTx) {
      throw new Error(`Invalid challenging block: missing tx for slot ${slot.toString(10)}.`)
    }
    return this._ethPlasmaClient.challengeBetweenAsync({
      slot,
      challengingBlockNum,
      challengingTx,
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }

  async challengeBeforeAsync(params: {
    slot: BN
    prevBlockNum: BN
    challengingBlockNum: BN
  }): Promise<object> {
    const { slot, prevBlockNum, challengingBlockNum } = params

    // In case the sender is exiting a Deposit transaction, they should just create a signed
    // transaction to themselves. There is no need for a merkle proof.
    if (challengingBlockNum.modn(this._childBlockInterval) !== 0) {
      const challengingTx = new PlasmaCashTx({
        slot,
        prevBlockNum: new BN(0),
        denomination: 1,
        newOwner: this.ethAddress
      })
      await challengingTx.signAsync(new OfflineWeb3Signer(this._web3, this._ethAccount))
      return this._ethPlasmaClient.challengeBeforeAsync({
        slot,
        challengingTx,
        challengingBlockNum,
        from: this.ethAddress,
        gas: this._defaultGas
      })
    }

    // Otherwise, they should get the raw tx info from the blocks, and the merkle proofs.
    const challengingTx = await this.getPlasmaTxAsync(slot, challengingBlockNum)
    if (!challengingTx) {
      throw new Error(`Invalid exit block: missing tx for slot ${slot.toString(10)}.`)
    }
    const prevTx = await this.getPlasmaTxAsync(slot, challengingBlockNum)
    if (!prevTx) {
      throw new Error(`Invalid prev block: missing tx for slot ${slot.toString(10)}.`)
    }
    return this._ethPlasmaClient.challengeBeforeAsync({
      slot,
      prevTx,
      challengingTx,
      prevBlockNum,
      challengingBlockNum,
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }

  async respondChallengeBeforeAsync(params: {
    slot: BN
    challengingTxHash: string
    respondingBlockNum: BN
  }): Promise<object> {
    const { slot, challengingTxHash, respondingBlockNum } = params
    const respondingTx = await this.getPlasmaTxAsync(slot, respondingBlockNum)
    if (!respondingTx) {
      throw new Error(`Invalid responding block: missing tx for slot ${slot.toString(10)}.`)
    }
    return this._ethPlasmaClient.respondChallengeBeforeAsync({
      slot,
      challengingTxHash,
      respondingBlockNum,
      respondingTx,
      from: this.ethAddress,
      gas: this._defaultGas
    })
  }
}
