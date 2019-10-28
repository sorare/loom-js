import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { EthereumGatewayV2 } from "./EthereumGatewayV2";
export declare class EthereumGatewayV2Factory {
    static connect(address: string, signerOrProvider: Signer | Provider): EthereumGatewayV2;
}
