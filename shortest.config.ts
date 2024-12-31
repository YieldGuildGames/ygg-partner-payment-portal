import type { ShortestConfig } from '@antiwork/shortest';

export default {
    headless: false,
    baseUrl: 'http://localhost:3000',
    testDir: 'app/e2e/__tests__',
    anthropicKey: process.env.ANTHROPIC_API_KEY
} satisfies ShortestConfig;
