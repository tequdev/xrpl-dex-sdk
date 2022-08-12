import { Client, Wallet } from 'xrpl';

export const TEST_WALLET_SECRET = process.env.TEST_WALLET_SECRET || 'ssSTL8XLsP3xmjtghETNnnriC5Xtd';
export const TEST_WALLET_PUBLIC_KEY = process.env.TEST_WALLET_PUBLIC_KEY || '';
export const TEST_WALLET_PRIVATE_KEY = process.env.TEST_WALLET_PRIVATE_KEY || '';

export interface TestWalletOptions {
  wallet_public_key?: string;
  wallet_private_key?: string;
  wallet_secret?: string;
}

export const createFundedWallet = async (client: Client) => {
  return (await client.fundWallet()).wallet;
};

export const setupWallet = (options: TestWalletOptions = { wallet_secret: TEST_WALLET_SECRET }) => {
  return options.wallet_secret
    ? Wallet.fromSecret(options.wallet_secret)
    : new Wallet(options.wallet_public_key as string, options.wallet_private_key as string);
};

export const setupWalletFromSecret = () => setupWallet();

export const setupWalletFromKeys = () =>
  setupWallet({ wallet_private_key: TEST_WALLET_PRIVATE_KEY, wallet_public_key: TEST_WALLET_PUBLIC_KEY });
