import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { ValidatorManagerV2 } from "./ValidatorManagerV2";
export declare class ValidatorManagerV2Factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ValidatorManagerV2;
}
