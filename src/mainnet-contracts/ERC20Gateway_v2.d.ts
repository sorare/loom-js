/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class ERC20Gateway extends Contract {
  functions: {
    nonces(arg0: string): Promise<BigNumber>;

    getERC20(contractAddress: string): Promise<BigNumber>;

    withdrawERC20(
      amount: number | string | BigNumber,
      contractAddress: string,
      _valIndexes: (number | string | BigNumber)[],
      _v: (number | string | BigNumber)[],
      _r: (string)[],
      _s: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    depositERC20(
      amount: number | string | BigNumber,
      contractAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    loomAddress(): Promise<string>;
  };
  filters: {
    ERC20Received(from: null, amount: null, contractAddress: null): EventFilter;

    TokenWithdrawn(
      owner: string | null,
      kind: null,
      contractAddress: null,
      value: null
    ): EventFilter;

    LoomCoinReceived(
      from: string | null,
      amount: null,
      loomCoinAddress: null
    ): EventFilter;
  };
}
