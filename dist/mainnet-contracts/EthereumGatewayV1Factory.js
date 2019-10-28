"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var EthereumGatewayV1Factory = /** @class */ (function () {
    function EthereumGatewayV1Factory() {
    }
    EthereumGatewayV1Factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return EthereumGatewayV1Factory;
}());
exports.EthereumGatewayV1Factory = EthereumGatewayV1Factory;
var _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "_token",
                type: "address"
            }
        ],
        name: "toggleToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "amount",
                type: "uint256"
            },
            {
                name: "sig",
                type: "bytes"
            },
            {
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "withdrawERC20",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "loomAddress",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "amount",
                type: "uint256"
            },
            {
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "depositERC20",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "getERC20",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "numValidators",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_address",
                type: "address"
            }
        ],
        name: "checkValidator",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address"
            }
        ],
        name: "nonces",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "allowAnyToken",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_validator",
                type: "address"
            },
            {
                name: "_v",
                type: "uint8[]"
            },
            {
                name: "_r",
                type: "bytes32[]"
            },
            {
                name: "_s",
                type: "bytes32[]"
            }
        ],
        name: "addValidator",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "nonce",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_validator",
                type: "address"
            },
            {
                name: "_v",
                type: "uint8[]"
            },
            {
                name: "_r",
                type: "bytes32[]"
            },
            {
                name: "_s",
                type: "bytes32[]"
            }
        ],
        name: "removeValidator",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_allow",
                type: "bool"
            }
        ],
        name: "toggleAllowAnyToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address"
            }
        ],
        name: "allowedTokens",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "loomToken",
                type: "address"
            },
            {
                name: "_validators",
                type: "address[]"
            },
            {
                name: "_threshold_num",
                type: "uint8"
            },
            {
                name: "_threshold_denom",
                type: "uint8"
            },
            {
                name: "_accounts",
                type: "address[]"
            },
            {
                name: "_nonces",
                type: "uint256[]"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        payable: true,
        stateMutability: "payable",
        type: "fallback"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "from",
                type: "address"
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256"
            }
        ],
        name: "ETHReceived",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                name: "from",
                type: "address"
            },
            {
                indexed: false,
                name: "tokenId",
                type: "uint256"
            },
            {
                indexed: false,
                name: "contractAddress",
                type: "address"
            },
            {
                indexed: false,
                name: "data",
                type: "bytes"
            }
        ],
        name: "ERC721Received",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                name: "from",
                type: "address"
            },
            {
                indexed: false,
                name: "tokenId",
                type: "uint256"
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                name: "contractAddress",
                type: "address"
            },
            {
                indexed: false,
                name: "data",
                type: "bytes"
            }
        ],
        name: "ERC721XReceived",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "tokenTypes",
                type: "uint256[]"
            },
            {
                indexed: false,
                name: "amounts",
                type: "uint256[]"
            },
            {
                indexed: false,
                name: "contractAddress",
                type: "address"
            },
            {
                indexed: false,
                name: "data",
                type: "bytes"
            }
        ],
        name: "ERC721XBatchReceived",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "from",
                type: "address"
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "ERC20Received",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                name: "kind",
                type: "uint8"
            },
            {
                indexed: false,
                name: "contractAddress",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "TokenWithdrawn",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                name: "loomCoinAddress",
                type: "address"
            }
        ],
        name: "LoomCoinReceived",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "validator",
                type: "address"
            }
        ],
        name: "AddedValidator",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "validator",
                type: "address"
            }
        ],
        name: "RemovedValidator",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address"
            }
        ],
        name: "OwnershipRenounced",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        constant: false,
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            },
            {
                name: "amount",
                type: "uint256"
            },
            {
                name: "sig",
                type: "bytes"
            },
            {
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "withdrawERC721X",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "uid",
                type: "uint256"
            },
            {
                name: "sig",
                type: "bytes"
            },
            {
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "withdrawERC721",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "amount",
                type: "uint256"
            },
            {
                name: "sig",
                type: "bytes"
            }
        ],
        name: "withdrawETH",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_operator",
                type: "address"
            },
            {
                name: "_from",
                type: "address"
            },
            {
                name: "_tokenId",
                type: "uint256"
            },
            {
                name: "_amount",
                type: "uint256"
            },
            {
                name: "_data",
                type: "bytes"
            }
        ],
        name: "onERC721XReceived",
        outputs: [
            {
                name: "",
                type: "bytes4"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_operator",
                type: "address"
            },
            {
                name: "_from",
                type: "address"
            },
            {
                name: "_types",
                type: "uint256[]"
            },
            {
                name: "_amounts",
                type: "uint256[]"
            },
            {
                name: "_data",
                type: "bytes"
            }
        ],
        name: "onERC721XBatchReceived",
        outputs: [
            {
                name: "",
                type: "bytes4"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_operator",
                type: "address"
            },
            {
                name: "_from",
                type: "address"
            },
            {
                name: "_uid",
                type: "uint256"
            },
            {
                name: "_data",
                type: "bytes"
            }
        ],
        name: "onERC721Received",
        outputs: [
            {
                name: "",
                type: "bytes4"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getETH",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "uid",
                type: "uint256"
            },
            {
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "getERC721",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            },
            {
                name: "contractAddress",
                type: "address"
            }
        ],
        name: "getERC721X",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    }
];
//# sourceMappingURL=EthereumGatewayV1Factory.js.map