![tw-banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

# thirdweb-nextui-org-starter

Starter template to build custom UI components with [thirdweb](https://thirdweb.com/) and [NextUI v2](https://nextui.org/).

## Installation

### 1. Clone the template or [fork](https://github.com/thirdweb-example/thirdweb-nextui-org-starter.git/fork)
```bash
git clone https://github.com/thirdweb-example/thirdweb-nextui-org-starter.git
```

### 2. Set up environment variables
Create a file called `.env.local` (at the root level of your project) with the following content:
```
NEXT_PUBLIC_TEMPLATE_CLIENT_ID="<your-thirdweb-client-id"
```

To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client).

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

## About this template

- Custom thirdweb Connect button built with NextUI [Button](https://nextui.org/docs/components/button)

- thirdweb [Bobbie Component](https://portal.thirdweb.com/references/typescript/v5/Blobbie) to generate gradiant based on wallet address

- [`useConnectModal`](https://portal.thirdweb.com/references/typescript/v5/useConnectModal) hook that allows you to open the Connect UI in a Modal to prompt the user to connect wallet.

- [`useWalletDetailsModal`](https://portal.thirdweb.com/react/v5/useWalletDetailsModal) hook to open the Wallet Details Modal that shows various information about the connected wallet and allows users to perform various actions like sending funds, receiving funds, switching networks, Buying tokens, etc.

Custom component found in [`components/navbar.tsx`](https://github.com/thirdweb-example/thirdweb-nextui-org-starter/blob/main/components/navbar.tsx#L87)



## Resources

- [Documentation](https://portal.thirdweb.com/typescript/v5)
- [Templates](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)
- [Blog](https://blog.thirdweb.com)

## Need help?

For help or feedback, please [visit our support site](https://thirdweb.com/support)