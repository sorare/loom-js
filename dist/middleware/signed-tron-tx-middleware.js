"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var debug_1 = tslib_1.__importDefault(require("debug"));
var loom_pb_1 = require("../proto/loom_pb");
var solidity_helpers_1 = require("../solidity-helpers");
var crypto_utils_1 = require("../crypto-utils");
var log = debug_1.default('signed-tron-tx-middleware');
/**
 * Signs transactions using a TRON compatible (secp256k1) private key.
 */
var SignedTronTxMiddleware = /** @class */ (function () {
    /**
     * @param signer tronweb signer to use for signing txs.
     */
    function SignedTronTxMiddleware(signer) {
        this.signer = signer;
    }
    SignedTronTxMiddleware.prototype.Handle = function (txData) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, hash, sig, signedTx;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.signerAddress) return [3 /*break*/, 2];
                        // Getting the public key address
                        _a = this;
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        // Getting the public key address
                        _a.signerAddress = _b.sent();
                        _b.label = 2;
                    case 2:
                        hash = solidity_helpers_1.soliditySha3({
                            type: 'bytes',
                            value: crypto_utils_1.bytesToHex(txData)
                        });
                        return [4 /*yield*/, this.signer.signAsync(hash)];
                    case 3:
                        sig = _b.sent();
                        log("signer: " + this.signerAddress + ", signature: 0x" + crypto_utils_1.bytesToHex(sig.slice(1)));
                        signedTx = new loom_pb_1.SignedTx();
                        signedTx.setInner(txData);
                        signedTx.setSignature(sig);
                        // NOTE: don't need to send secp256k1 public key sig since it can be recovered from hash + sig
                        return [2 /*return*/, signedTx.serializeBinary()];
                }
            });
        });
    };
    return SignedTronTxMiddleware;
}());
exports.SignedTronTxMiddleware = SignedTronTxMiddleware;
//# sourceMappingURL=signed-tron-tx-middleware.js.map