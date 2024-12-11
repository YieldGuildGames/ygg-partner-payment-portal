'use client';
import React, { useState, useEffect } from 'react';
import { title } from '@/components/primitives';
import { PayEmbed } from 'thirdweb/react';
import { client } from '@/config/Thirdweb/client';
import { SellerPaymentInfoInterface } from '@/types/PaymentInfo.types';
import { TEST_MODE } from '@/utils/constants/paymentInfo.constants';
import { Input } from '@nextui-org/input';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import { fetchDiscountCodes, DiscountCodesType } from '@/helpers/airtable.helpers';

interface PaymentInfoComponentProps {
    SELLER_PAYMENT_INFO: SellerPaymentInfoInterface; // Adjust the type according to the structure of GAP_PAYMENT_INFO
}

const PaymentInfoComponent: React.FC<PaymentInfoComponentProps> = ({ SELLER_PAYMENT_INFO }) => {
    const [discountCode, setDiscountCode] = useState('');
    const [sellerPaymentInfo, setSellerPaymentInfo] = useState(SELLER_PAYMENT_INFO);
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountCodes, setDiscountCodes] = useState<DiscountCodesType>({});

    // We have the partnership team and Marielle checking and approving the Quest packages for total rewards, contract signign etc, so there's a human in the loop to verify if anyone abuses this anyways.
    useEffect(() => {
        async function getDiscountCodes() {
            try {
                const response = await fetch('/api/discount-codes');
                const codes = await response.json();
                setDiscountCodes(codes);
            } catch (error) {
                console.error('Error fetching discount codes:', error);
            }
        }

        getDiscountCodes();
    }, []);
    const handleDiscountCodeChange = (e: any) => {
        setDiscountCode(e.target.value);
        setDiscountApplied(false);
    };

    const applyDiscount = () => {
        const discountPercentage = discountCodes[discountCode.toUpperCase()];
        if (discountPercentage) {
            const originalAmount = parseFloat(SELLER_PAYMENT_INFO.paymentInfo.amount);
            const discountAmount = (originalAmount * discountPercentage) / 100;
            const newAmount = (originalAmount - discountAmount).toFixed(2);
            setSellerPaymentInfo({
                ...SELLER_PAYMENT_INFO,
                paymentInfo: {
                    ...SELLER_PAYMENT_INFO.paymentInfo,
                    amount: newAmount
                }
            });
            setDiscountApplied(true);
        } else {
            alert('Invalid discount code');
        }
    };

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title()}>Welcome to the&nbsp;</span>
                <span className={title({ color: 'violet' })}>Partner&nbsp;</span>
                <br />
                <span className={title()}>Payment Portal</span>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-4">
                <Input
                    type="text"
                    label="Discount Code: "
                    value={discountCode}
                    placeholder="Enter discount code"
                    className="max-w-xs"
                    onChange={handleDiscountCodeChange}
                />
                <Popover placement="bottom" showArrow={true}>
                    <PopoverTrigger>
                        <Button onClick={applyDiscount} color="secondary" className="mt-2">
                            Apply
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">{discountApplied && <p>Discount applied!</p>}</div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            {discountApplied && <p>Discount applied! New amount: ${sellerPaymentInfo.paymentInfo.amount}</p>}
            <PayEmbed
                client={client}
                payOptions={{
                    mode: 'direct_payment',
                    paymentInfo: sellerPaymentInfo.paymentInfo,
                    metadata: sellerPaymentInfo.metadata,
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
