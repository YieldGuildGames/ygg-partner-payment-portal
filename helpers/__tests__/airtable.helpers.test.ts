import Airtable from 'airtable';
import { fetchDiscountCodes, DiscountCodesType } from '../airtable.helpers';

// Mock the Airtable module
jest.mock('airtable', () => {
    // Mock the 'all' method
    const mockAll = jest.fn();

    process.env.AIRTABLE_BASE_ID = 'mocked_base_id';
    process.env.AIRTABLE_API_KEY = 'mocked_api_key';

    // Mock the 'select' method to return an object with 'all'
    const mockSelect = jest.fn(() => ({
        all: mockAll
    }));

    // Mock the table object returned by baseFunction(tableName)
    const mockTable = jest.fn(() => ({
        select: mockSelect
    }));

    // Mock the function returned by 'Airtable.base(baseId)'
    const mockBaseFunction = jest.fn((tableName: string) => mockTable());

    // Mock 'Airtable.base' to return a function
    const mockBase = jest.fn(() => mockBaseFunction);

    return {
        __esModule: true,
        default: {
            base: mockBase,
            configure: jest.fn()
        },
        base: mockBase,
        configure: jest.fn()
    };
});

describe('airtable helpers Test Suite', () => {
    describe('fetchDiscountCodes', () => {
        const mockRecords = [
            { get: (field: string) => (field === 'Name' ? 'SAVE10' : field === 'Discount Amount' ? 10 : 'Active') },
            { get: (field: string) => (field === 'Name' ? 'SAVE20' : field === 'Discount Amount' ? 20 : 'Inactive') },
            { get: (field: string) => (field === 'Name' ? 'SAVE30' : field === 'Discount Amount' ? 30 : 'Active') }
        ];

        beforeEach(() => {
            jest.clearAllMocks();

            // Get the mocked 'all' method
            const mockAll = ((Airtable.base as jest.Mock)() as jest.Mock)('tableName').select().all as jest.Mock;

            // Mock the 'all' method to resolve with mockRecords
            mockAll.mockResolvedValue(mockRecords);
        });

        it('should fetch active discount codes from Airtable', async () => {
            const expectedDiscountCodes: DiscountCodesType = {
                SAVE10: 10,
                SAVE30: 30
            };

            const discountCodes = await fetchDiscountCodes();
            expect(discountCodes).toEqual(expectedDiscountCodes);
        });

        it('should handle errors gracefully', async () => {
            const errorMessage = 'Error fetching discount codes';

            // Get the mocked 'all' method
            const mockAll = ((Airtable.base as jest.Mock)() as jest.Mock)('tableName').select().all as jest.Mock;

            // Mock the 'all' method to reject with an error
            mockAll.mockRejectedValue(new Error(errorMessage));

            await expect(fetchDiscountCodes()).rejects.toThrow(errorMessage);
        });
    });
});
