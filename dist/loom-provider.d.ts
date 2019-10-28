import retry from 'retry';
import { Client, ITxMiddlewareHandler } from './client';
export interface IEthReceipt {
    transactionHash: string;
    transactionIndex: string;
    blockHash: string;
    blockNumber: string;
    gasUsed: string;
    cumulativeGasUsed: string;
    contractAddress: string;
    logs: Array<any>;
    status: string;
}
export interface IEthTransaction {
    hash: string;
    nonce: string;
    blockHash: string;
    blockNumber: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    gasPrice: string;
    gas: string;
    input: string;
}
export interface IEthBlock {
    blockNumber: string;
    transactionHash: string;
    parentHash: string;
    logsBloom: string;
    timestamp: number;
    transactions: Array<IEthReceipt | string>;
}
export interface IEthRPCPayload {
    id: number;
    method: string;
    params: Array<any>;
}
export interface IEthFilterLog {
    removed: boolean;
    logIndex: string;
    transactionIndex: string;
    transactionHash: string;
    blockHash: string;
    blockNumber: string;
    address: string;
    data: string;
    topics: Array<string>;
}
export interface IEthSubscription {
    id: string;
    method: string;
    params: Array<any>;
}
export declare type SetupMiddlewareFunction = (client: Client, privateKey: Uint8Array) => ITxMiddlewareHandler[];
export declare type EthRPCMethod = (payload: IEthRPCPayload) => any;
/**
 * Web3 provider that interacts with EVM contracts deployed on Loom DAppChains.
 */
export declare class LoomProvider {
    private _client;
    private _subscribed;
    private _ethSubscriptions;
    private _accountMiddlewares;
    private _setupMiddlewares;
    private _netVersionFromChainId;
    private _ethRPCMethods;
    protected notificationCallbacks: Array<Function>;
    readonly accounts: Map<string, Uint8Array | null>;
    /**
     * The retry strategy that should be used to retry some web3 requests.
     * By default failed requested won't be resent.
     * To understand how to tweak the retry strategy see
     * https://github.com/tim-kos/node-retry#retrytimeoutsoptions
     */
    retryStrategy: retry.OperationOptions;
    /**
     * Overrides the chain ID of the caller, when this is `null` the caller chain ID defaults
     * to the client chain ID.
     */
    callerChainId: string | null;
    /**
     * Constructs the LoomProvider to bridges communication between Web3 and Loom DappChains
     *
     * @param client Client from LoomJS
     * @param privateKey Account private key
     */
    constructor(client: Client, privateKey: Uint8Array, setupMiddlewaresFunction?: SetupMiddlewareFunction);
    /**
     * Creates new accounts by passing the private key array
     *
     * Accounts will be available on public properties accounts
     *
     * @param accountsPrivateKey Array of private keys to create new accounts
     */
    addAccounts(accountsPrivateKey: Array<Uint8Array>): void;
    /**
     * Set an array of middlewares for a given account
     *
     * @param address Address to be register the middleware
     * @param middlewares Array of middlewares for the address
     */
    setMiddlewaresForAddress(address: string, middlewares: Array<ITxMiddlewareHandler>): void;
    readonly accountMiddlewares: Map<string, Array<ITxMiddlewareHandler>>;
    on(type: string, callback: any): void;
    private _addDefaultEvents;
    private _addDefaultMethods;
    /**
     * Sets up the provider to interact with the Loom /query endpoint, which requires Web3 JSON-RPC
     * messages to be marshalled to protobufs.
     */
    private _addLegacyDefaultMethods;
    /**
     * Sets up the provider to interact with the Loom /eth endpoint.
     * This endpoint emulates the Web3 JSON-RPC API so most messages don't require transformation.
     */
    private _addWeb3EndpointMethods;
    /**
     * Adds custom methods to the provider when a particular method isn't supported
     *
     * Throws if the added method already exists
     *
     * @param method name of the method to be added
     * @param customMethodFn function that will implement the method
     */
    addCustomMethod(method: string, customMethodFn: EthRPCMethod): void;
    /**
     * Overwrites existing method on the provider
     *
     * Throws if the overwritten method doesn't exists
     *
     * @param method name of the method to be overwritten
     * @param customMethodFn function that will implement the method
     */
    overwriteMethod(method: string, customMethodFn: EthRPCMethod): void;
    /**
     * Return the numerical representation of the ChainId
     * More details at: https://github.com/loomnetwork/loom-js/issues/110
     */
    static chainIdToNetVersion(chainId: string): number;
    removeListener(type: string, callback: (...args: any[]) => void): void;
    removeAllListeners(type: string, callback: Function): void;
    disconnect(): void;
    /**
     * This function is invoked internally by Web3
     */
    reset(): void;
    sendAsync(payload: any, callback?: Function): Promise<any | void>;
    /**
     * Should be used to make async request
     * This method is used internally by web3, so we adapt it to be used with loom contract
     * when we are wrapping the evm on a DAppChain
     * @param payload JSON payload generated by web3 which will be translated to loom transaction/call
     * @param callback Triggered on end with (err, result)
     */
    send(payload: any, callback: Function): Promise<void>;
    private _ethCallSupportedMethod;
    private _ethAccounts;
    private _ethBlockNumber;
    private _ethCall;
    private _ethEstimateGas;
    private _ethGetBalance;
    private _ethGasPrice;
    private _ethGetBlockByHash;
    private _ethGetBlockByNumber;
    private _ethGetCode;
    private _ethGetFilterChanges;
    private _ethGetLogs;
    private _ethGetTransactionByHash;
    private _ethGetTransactionReceipt;
    private _ethNewBlockFilter;
    private _ethNewFilter;
    private _ethNewPendingTransactionFilter;
    private _ethSendTransaction;
    private _ethSign;
    private _ethSubscribeLegacy;
    private _ethSubscribe;
    private _ethUninstallFilter;
    private _ethUnsubscribeLegacy;
    private _ethUnsubscribe;
    private _netVersion;
    private _deployAsync;
    private _callAsync;
    private _callStaticAsync;
    private _createBlockInfo;
    private _createTransactionResult;
    private _createReceiptResult;
    private _getTransaction;
    private _createLogResult;
    private _getLogs;
    private _onWebSocketMessage;
    private _commitTransaction;
    private _okResponse;
}
