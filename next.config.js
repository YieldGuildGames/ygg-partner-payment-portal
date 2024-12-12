/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // If you need to expose env variables to the client, prefix them with NEXT_PUBLIC_
    env: {
        AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
        AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID
    }
};

module.exports = nextConfig;
