"use client";

import { GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO } from "@/utils/constants/paymentInfo.constants";
import PaymentInfoComponent from "@/components/PaymentPortal/PaymentPortal";

export default function GAPPaymentPage() {
  return (
    <PaymentInfoComponent
      SELLER_PAYMENT_INFO={GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO}
    />
  );
}
