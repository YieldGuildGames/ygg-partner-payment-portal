import { createThirdwebClient } from 'thirdweb';

jest.mock('thirdweb', () => ({
    __esModule: true,
    createThirdwebClient: jest.fn().mockReturnValue({ mockClient: true })
}));

describe('ThirdWeb Client Config Test Suite', () => {
    const originalEnv = process.env;

    let createThirdwebClient: jest.Mock;

    beforeEach(() => {
        //?  By ensuring that all imports happen after mocks are set up,
        //? and by using require() after setting environment variables,
        //? we guarantee that the module under test (client.ts)
        //? and the mocked module (thirdweb) are properly synchronized.

        jest.resetModules(); // Clear module cache
        process.env = { ...originalEnv }; // Reset process.env to original state
        jest.clearAllMocks(); // Clear all mocks

        // Re-import the mocked function after resetting modules
        ({ createThirdwebClient } = require('thirdweb'));
    });

    afterEach(() => {
        process.env = originalEnv; // Restore original process.env
        jest.clearAllMocks(); // Clear all mocks
    });

    it('should create a client when NEXT_PUBLIC_TEMPLATE_CLIENT_ID is set', () => {
        process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID = 'test-client-id';

        const { client } = require('../client');

        expect(client).toBeDefined();

        expect(createThirdwebClient).toHaveBeenCalledWith({
            clientId: 'test-client-id'
        });
    });

    it('should throw an error when NEXT_PUBLIC_TEMPLATE_CLIENT_ID is not set', () => {
        delete process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

        expect(() => require('../client')).toThrow('No client ID provided');
    });
});
