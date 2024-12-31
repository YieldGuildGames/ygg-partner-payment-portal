[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/PQV8CxL9qSoVU7BP9zu7vJ/7ixEtrcb3G3uHua214ifoV/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/PQV8CxL9qSoVU7BP9zu7vJ/7ixEtrcb3G3uHua214ifoV/tree/main)

# YGG Partner Payment Portal

## Description

This app is an external payment portal for partners sending YGG rewards. This is connected to the main YGG partner dashboard & Airtable.
This app is meant to be connected to the main dashboard to be explicit.

## Linked Technical documentation:

- [Overview of YGG Partner Client Dashboard](https://ve-technologies.notion.site/YGG-Partner-Dashboard-V1-13ea201b8383809aba10e662b8be35f4?pvs=4)

## TODOs

- Connect to a viable testnet network for dev & staging versions of the

## Infrastructure

- This app is connected to YGG's Vercel environment. If you need to change anything on the infrastructure side please visit YGG's Vercel organization.

## Installation

- To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client).
- Please contact Jen for Thirdweb access as Thirdweb only allows single users for their organizations currently.

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
pnpm run dev
```

Create a production build

```bash
pnpm run build
```

Preview the production build

```bash
pnpm start
```

## About the Payment Portal App

- The original base code was refactored from [ThirdWeb Next UI starter](https://github.com/thirdweb-example/thirdweb-nextui-org-starter.git/fork)

- Custom thirdweb Connect button built with NextUI [Button](https://nextui.org/docs/components/button)

- thirdweb [Bobbie Component](https://portal.thirdweb.com/references/typescript/v5/Blobbie) to generate gradiant based on wallet address

- [`useConnectModal`](https://portal.thirdweb.com/references/typescript/v5/useConnectModal) hook that allows you to open the Connect UI in a Modal to prompt the user to connect wallet.

- [`useWalletDetailsModal`](https://portal.thirdweb.com/react/v5/useWalletDetailsModal) hook to open the Wallet Details Modal that shows various information about the connected wallet and allows users to perform various actions like sending funds, receiving funds, switching networks, Buying tokens, etc.

## Resources for Thirdweb

- [Documentation](https://portal.thirdweb.com/typescript/v5)
- [Templates](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)
- [Blog](https://blog.thirdweb.com)

## Testing

### E2E Testing

This E2E test suite uses AI to reduce the work and overhead needed.

It uses this [open sourced framework called shortest](https://github.com/anti-work/shortest). You can visit the main website here called [shortest.com](https://shortest.com).

How this works under the hood is that it uses Anthropics new "Computer use" paradigm where it takes screenshots, translates that into tokens, and overlays pixel based coordinates to do tasks - which is pretty cool.
See more on [this here](https://docs.anthropic.com/en/docs/build-with-claude/computer-use).

#### Running Test Scripts

```bash
pnpm run ai-e2e-testing

pnpm run ai-e2e-testing:ci

```

You'll want to make sure the --headless flag is on if running said tests in a CI/CD pipeline.
