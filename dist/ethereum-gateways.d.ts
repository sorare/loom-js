import BN from 'bn.js';
import { ethers, Contract, ContractTransaction } from 'ethers';
import { IWithdrawalReceipt } from './contracts/transfer-gateway';
import { TransactionOverrides } from './mainnet-contracts';
import { ValidatorManagerV2 as ValidatorManagerContractV2 } from './mainnet-contracts/ValidatorManagerV2';
import { EthereumGatewayV1 as EthereumGatewayV1Contract } from './mainnet-contracts/EthereumGatewayV1';
import { EthereumGatewayV2 as EthereumGatewayV2Contract } from './mainnet-contracts/EthereumGatewayV2';
/**
 * Thin wrapper over Ethereum Gateway contracts that smoothes over differences between versions.
 * Each instance of the wrapper is connected to a single Ethereum account.
 */
export interface IEthereumGateway {
    readonly version: 1 | 2;
    /** Underlying ethers.js contract instance. */
    readonly contract: Contract;
    /**
     * Withdraws ERC20, ERC721, ERC721X tokens, or ETH from the Ethereum Gateway.
     * @param receipt Withdrawal receipt from the DAppChain.
     * @param overrides ethers.js transaction overrides.
     */
    withdrawAsync(receipt: IWithdrawalReceipt, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    /**
     * Deposits ERC20 tokens into the Ethereum Gateway.
     * @note Before calling this function the user that intends to make the deposit must allow the
     *       Ethereum Gateway to transfer the desired amount via the standard ERC20 approve function.
     * @param amount Amount of tokens to deposit.
     * @param contractAddress Ethereum token contract address.
     * @param overrides ethers.js transaction overrides.
     */
    depositERC20Async(amount: number | string | BN, contractAddress: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    /**
     * @returns A new instance of the wrapper connected to the given Ethereum account.
     */
    withSigner(signer: ethers.Signer): IEthereumGateway;
}
export declare class EthereumGatewayV1 implements IEthereumGateway {
    readonly contract: EthereumGatewayV1Contract;
    readonly version: number;
    constructor(contract: EthereumGatewayV1Contract);
    withdrawAsync(receipt: IWithdrawalReceipt, overrides?: TransactionOverrides): Promise<ethers.ContractTransaction>;
    depositERC20Async(amount: number | string | BN, contractAddress: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    withSigner(signer: ethers.Signer): IEthereumGateway;
}
export declare class EthereumGatewayV2 implements IEthereumGateway {
    readonly contract: EthereumGatewayV2Contract;
    private readonly vmc;
    readonly version: number;
    constructor(contract: EthereumGatewayV2Contract, vmc: ValidatorManagerContractV2);
    withdrawAsync(receipt: IWithdrawalReceipt, overrides?: TransactionOverrides): Promise<ethers.ContractTransaction>;
    depositERC20Async(amount: number | string | BN, contractAddress: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    withSigner(signer: ethers.Signer): IEthereumGateway;
}
/**
 * Creates an Ethereum Gateway contract wrapper.
 * @param version Ethereum Gateway contract version, must be 1, or 2.
 * @param address Ethereum Gateway address.
 * @param provider web3 provider.
 */
export declare function createEthereumGatewayAsync(version: 1 | 2, address: string, provider: ethers.Signer | ethers.providers.Provider): Promise<IEthereumGateway>;
