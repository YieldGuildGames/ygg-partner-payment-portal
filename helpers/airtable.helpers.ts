import Airtable from 'airtable';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

if (!AIRTABLE_BASE_ID) {
    throw new Error('AIRTABLE_BASE_ID is not defined');
}

if (!AIRTABLE_API_KEY) {
    throw new Error('AIRTABLE_API_KEY is not defined');
}

const AIRTABLE_TABLE_NAME = 'Discount Codes';
Airtable.configure({
    apiKey: AIRTABLE_API_KEY
});

const airtableBase = Airtable.base(AIRTABLE_BASE_ID);

export type DiscountCodesType = Record<string, number>;

export async function fetchDiscountCodes(): Promise<DiscountCodesType> {
    const discountCodes: DiscountCodesType = {};

    try {
        const records = await airtableBase(AIRTABLE_TABLE_NAME).select().all();

        records.forEach((record) => {
            const code = record.get('Name') as string;
            const discount = record.get('Discount Amount') as number;
            const status = record.get('Status') as string;

            if (code && discount && status === 'Active') {
                discountCodes[code] = discount;
            }
        });
    } catch (error) {
        console.error('Error fetching discount codes from Airtable');
        throw error;
    }

    return discountCodes;
}
