"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client WS-RPC
require("./e2e/ws-rpc-client-tests");
// Loom Provider
require("./e2e/loom-provider-tests");
require("./e2e/loom-provider-eth-get-logs");
require("./e2e/loom-provider-eth-filters");
require("./e2e/loom-provider-eth-filters-2");
require("./e2e/loom-provider-subscribe");
require("./e2e/loom-provider-web3-tests");
require("./e2e/loom-provider-web3-middlewares-tests");
require("./e2e/loom-provider-web3-child-events");
// EVM
require("./e2e/client-evm-tests");
require("./e2e/client-evm-event-tests");
require("./e2e/client-evm-event-tests-2");
// Middlewares
require("./e2e/client-test-tx-cache");
require("./e2e/client-test-tx-middleware");
require("./e2e/tron-test-tx-middleware");
require("./e2e/binance-test-tx-middleware");
// Events
require("./e2e/multiple-events-nd-tests");
// Contracts
require("./e2e/coin-tests");
require("./e2e/address-mapper-tests");
// TODO: Re-enable once this is updated to DPOSv2
//import './e2e/dpos-tests'
// Weave Blueprint Contract
require("./e2e/contract-tests");
// Simple Store Contract
require("./e2e/evm-contract-tests");
//# sourceMappingURL=e2e_tests.js.map