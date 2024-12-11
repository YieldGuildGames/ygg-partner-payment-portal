import Airtable from 'airtable';
import { fetchDiscountCodes, DiscountCodesType } from '../airtable.helpers';

jest.mock('airtable', () => {
    const mockSelect = jest.fn().mockReturnThis();
    const mockAll = jest.fn();

    return {
        base: jest.fn(() => ({
            select: jest.fn(() => ({
                all: mockAll
            }))
        })),
        configure: jest.fn()
    };
});
// TODO:
describe('fetchDiscountCodes', () => {
    const mockRecords = [
        { get: (field: string) => (field === 'Name' ? 'SAVE10' : 10) },
        { get: (field: string) => (field === 'Name' ? 'SAVE20' : 20) },
        { get: (field: string) => (field === 'Name' ? 'SAVE30' : 30) }
    ];

    beforeEach(() => {
        (Airtable.base('baseId').select().all as jest.Mock).mockResolvedValue(mockRecords);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    xit('should fetch discount codes from Airtable', async () => {
        const expectedDiscountCodes: DiscountCodesType = {
            SAVE10: 10,
            SAVE20: 20,
            SAVE30: 30
        };

        const discountCodes = await fetchDiscountCodes();
        expect(discountCodes).toEqual(expectedDiscountCodes);
    });

    xit('should handle errors gracefully', async () => {
        const errorMessage = 'Error fetching discount codes';
        (Airtable.base('baseId').select().all as jest.Mock).mockRejectedValue(new Error(errorMessage));

        await expect(fetchDiscountCodes()).rejects.toThrow(errorMessage);
    });
});
