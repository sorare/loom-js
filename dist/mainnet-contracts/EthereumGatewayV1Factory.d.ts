import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { EthereumGatewayV1 } from "./EthereumGatewayV1";
export declare class EthereumGatewayV1Factory {
    static connect(address: string, signerOrProvider: Signer | Provider): EthereumGatewayV1;
}
