import { getDefaultToken } from 'thirdweb/react';
import { base, baseSepolia } from 'thirdweb/chains';
import { SellerPaymentInfoInterface } from '@/types/PaymentInfo.types';

export const TEST_MODE = process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? false : true;

const chain = TEST_MODE === true ? baseSepolia : base;

export const YGG_WALLET = process.env.NEXT_PUBLIC_SELLER_WALLET_ADDRESS as string;

enum CURRENCIES {
    USDC = 'USDC'
}

export const GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO: SellerPaymentInfoInterface = {
    metadata: {
        name: 'Guild Advancement Program Package',
        image: '/ygg_assets/ygg_gap_image.png'
    },
    paymentInfo: {
        sellerAddress: YGG_WALLET,
        chain,
        amount: '10000',
        token: getDefaultToken(chain, CURRENCIES.USDC)
    }
};

export const FUTURE_OF_WORK_PAYMENT_INFO: SellerPaymentInfoInterface = {
    metadata: {
        name: 'Future of Work Program Package',
        image: '/ygg_assets/ygg_fow_image.png'
    },
    paymentInfo: {
        sellerAddress: YGG_WALLET,
        chain,
        amount: '10000',
        token: getDefaultToken(chain, CURRENCIES.USDC)
    }
};

export const GAME_TESTING_PAYMENT_INFO: SellerPaymentInfoInterface = {
    metadata: {
        name: 'Game Testing Program Package',
        image: '/ygg_assets/YGG_game_testing.png'
    },
    paymentInfo: {
        sellerAddress: YGG_WALLET,
        chain,
        amount: '1000',
        token: getDefaultToken(chain, CURRENCIES.USDC)
    }
};

export const TEST_PAYMENT_INFO: SellerPaymentInfoInterface = {
    metadata: {
        name: 'TEST - Advancement Program Package',
        image: '/ygg_assets/ygg_background_green.png'
    },
    paymentInfo: {
        sellerAddress: YGG_WALLET,
        chain,
        amount: '1',
        token: getDefaultToken(chain, CURRENCIES.USDC)
    }
};
