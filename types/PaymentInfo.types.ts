import { TokenInfo } from "thirdweb/react";

export interface PaymentMetadata {
  name: string;
  image: string;
}

export interface PaymentInfo {
  sellerAddress: string;
  chain: any; // TODO Replace 'any' with the appropriate type for 'chain'
  amount: string;
  token: TokenInfo | undefined;
}

export interface SellerPaymentInfoInterface {
  metadata: PaymentMetadata;
  paymentInfo: PaymentInfo;
}
