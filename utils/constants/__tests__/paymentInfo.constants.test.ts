// paymentInfo.constants.test.ts

import { SellerPaymentInfoInterface } from '@/types/PaymentInfo.types';

jest.mock('thirdweb/react', () => ({
    getDefaultToken: jest.fn()
}));

jest.mock('thirdweb/chains', () => ({
    base: {},
    baseSepolia: {}
}));
describe('constants Test Suite ', () => {
    describe('paymentInfo.constants Test Suite ', () => {
        const originalEnv = process.env;

        beforeEach(() => {
            jest.resetModules(); // Clear module cache
            process.env = { ...originalEnv };
        });

        afterEach(() => {
            process.env = originalEnv;
        });

        it('TEST_MODE should be false when NEXT_PUBLIC_NODE_ENV is "production"', () => {
            process.env.NEXT_PUBLIC_NODE_ENV = 'production';
            const { TEST_MODE } = require('../paymentInfo.constants');
            expect(TEST_MODE).toBe(false);
        });

        it('TEST_MODE should be true when NEXT_PUBLIC_NODE_ENV is not "production"', () => {
            process.env.NEXT_PUBLIC_NODE_ENV = 'development';
            const { TEST_MODE } = require('../paymentInfo.constants');
            expect(TEST_MODE).toBe(true);
        });

        it('YGG_WALLET should be set from environment variable', () => {
            process.env.NEXT_PUBLIC_SELLER_WALLET_ADDRESS = '0x1234567890abcdef';
            const { YGG_WALLET } = require('../paymentInfo.constants');
            expect(YGG_WALLET).toBe('0x1234567890abcdef');
        });

        it('GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO should have correct metadata', () => {
            const { GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO } = require('../paymentInfo.constants');
            expect(GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO.metadata).toEqual({
                name: 'Guild Advancement Program Package',
                image: '/ygg_assets/ygg_gap_image.png'
            });
        });

        it('GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO should have sellerAddress set to YGG_WALLET', () => {
            process.env.NEXT_PUBLIC_SELLER_WALLET_ADDRESS = '0xabcdef1234567890';
            const { YGG_WALLET, GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO } = require('../paymentInfo.constants');
            expect(GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO.paymentInfo.sellerAddress).toBe(YGG_WALLET);
        });
    });
});
