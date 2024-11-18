# YGG Partner Payment Portal

## Description

This app is an external payment portal for partners sending YGG rewards. This is connected to the main YGG partner dashboard & Airtable.
This app is meant to be connected to the main dashboard to be explicit.

## Linked Technical documentation:

-   [Overview of YGG Partner Client Dashboard](https://ve-technologies.notion.site/YGG-Partner-Dashboard-V1-13ea201b8383809aba10e662b8be35f4?pvs=4)

## TODOs

-   Connect to a viable testnet network for dev & staging versions of the

## Infrastructure

-   This app is connected to YGG's Vercel environment. If you need to change anything on the infrastructure side please visit YGG's Vercel organization.

## Installation

-   To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client).
-   Please contact Jen for Thirdweb access as Thirdweb only allows single users for their organizations currently.

### 3. Install the dependencies

```bash
# npm
npm install

# yarn
yarn

# pnpm
pnpm install
```

## Run locally

Start development server

```bash
yarn dev
```

Create a production build

```bash
yarn build
```

Preview the production build

```bash
yarn start
```

## About the Payment Portal App

-   The original base code was refactored from [ThirdWeb Next UI starter](https://github.com/thirdweb-example/thirdweb-nextui-org-starter.git/fork)

-   Custom thirdweb Connect button built with NextUI [Button](https://nextui.org/docs/components/button)

-   thirdweb [Bobbie Component](https://portal.thirdweb.com/references/typescript/v5/Blobbie) to generate gradiant based on wallet address

-   [`useConnectModal`](https://portal.thirdweb.com/references/typescript/v5/useConnectModal) hook that allows you to open the Connect UI in a Modal to prompt the user to connect wallet.

-   [`useWalletDetailsModal`](https://portal.thirdweb.com/react/v5/useWalletDetailsModal) hook to open the Wallet Details Modal that shows various information about the connected wallet and allows users to perform various actions like sending funds, receiving funds, switching networks, Buying tokens, etc.

## Resources for Thirdweb

-   [Documentation](https://portal.thirdweb.com/typescript/v5)
-   [Templates](https://thirdweb.com/templates)
-   [YouTube](https://www.youtube.com/c/thirdweb)
-   [Blog](https://blog.thirdweb.com)
