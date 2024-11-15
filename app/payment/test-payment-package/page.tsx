'use client';
import { TEST_PAYMENT_INFO } from '@/utils/constants/paymentInfo.constants';
import PaymentInfoComponent from '@/components/PaymentPortal/PaymentPortal';

export default function PaymentPage() {
    return <PaymentInfoComponent SELLER_PAYMENT_INFO={TEST_PAYMENT_INFO} />;
}
