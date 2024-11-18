'use client';
import React from 'react';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title } from '@/components/primitives';
import { PayEmbed } from 'thirdweb/react';
import { client } from '@/config/Thirdweb/client';
import { SellerPaymentInfoInterface } from '@/types/PaymentInfo.types';
import { TEST_MODE } from '@/utils/constants/paymentInfo.constants';

interface PaymentInfoComponentProps {
    SELLER_PAYMENT_INFO: SellerPaymentInfoInterface; // Adjust the type according to the structure of GAP_PAYMENT_INFO
}

const PaymentInfoComponent: React.FC<PaymentInfoComponentProps> = ({ SELLER_PAYMENT_INFO }) => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title()}>Welcome to the&nbsp;</span>
                <span className={title({ color: 'violet' })}>Partner&nbsp;</span>
                <br />
                <span className={title()}>Payment Portal</span>
            </div>
            <div className="flex gap-3">
                <Link
                    isExternal
                    className={buttonStyles({
                        color: 'primary',
                        radius: 'sm',
                        variant: 'shadow'
                    })}
                    href={siteConfig.links.partnerDashboard}
                >
                    Back to Partner Dashboard
                </Link>
            </div>

            <PayEmbed
                client={client}
                payOptions={{
                    mode: 'direct_payment',
                    paymentInfo: SELLER_PAYMENT_INFO.paymentInfo,
                    metadata: SELLER_PAYMENT_INFO.metadata,
                    buyWithCrypto: {
                        testMode: TEST_MODE
                    },
                    buyWithFiat: {
                        testMode: TEST_MODE
                    }
                }}
                connectOptions={{
                    connectModal: {
                        size: 'wide'
                    }
                }}
            />
        </section>
    );
};

export default PaymentInfoComponent;
