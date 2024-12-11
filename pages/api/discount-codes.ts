import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchDiscountCodes, DiscountCodesType } from '@/helpers/airtable.helpers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const discountCodes: DiscountCodesType = await fetchDiscountCodes();
        res.status(200).json(discountCodes);
    } catch (error) {
        console.error('Error fetching discount codes:', error);
        res.status(500).json({ error: 'Failed to fetch discount codes' });
    }
}
