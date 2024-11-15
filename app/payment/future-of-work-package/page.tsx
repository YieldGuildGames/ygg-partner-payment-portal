'use client';
import { FUTURE_OF_WORK_PAYMENT_INFO } from '@/utils/constants/paymentInfo.constants';
import PaymentInfoComponent from '@/components/PaymentPortal/PaymentPortal';

export default function PaymentPage() {
    return <PaymentInfoComponent SELLER_PAYMENT_INFO={FUTURE_OF_WORK_PAYMENT_INFO} />;
}
