import { GAME_TESTING_PAYMENT_INFO } from "@/utils/constants/paymentInfo.constants";
import PaymentInfoComponent from "@/components/PaymentPortal/PaymentPortal";

export default function GAPPaymentPage() {
  return (
    <PaymentInfoComponent SELLER_PAYMENT_INFO={GAME_TESTING_PAYMENT_INFO} />
  );
}
