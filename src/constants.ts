import { RippleUrl } from './models';

export const DEFAULT_LIMIT = 20;

export const REFERENCE_TX_COST = '10';
export const ACCOUNT_DELETE_TX_COST = '2000000';

export const MAINNET_URL: RippleUrl = process.env.RIPPLE_MAINNET_URL || 's1.ripple.com';
export const MAINNET_FULL_HISTORY_1_URL: RippleUrl = process.env.RIPPLE_MAINNET_FULL_HISTORY_1_URL || 'xrplcluster.com';
export const MAINNET_FULL_HISTORY_2_URL: RippleUrl = process.env.RIPPLE_MAINNET_FULL_HISTORY_2_URL || 's2.ripple.com';
export const TESTNET_URL: RippleUrl = process.env.RIPPLE_TESTNET_URL || 's.altnet.rippletest.net';
export const DEVNET_URL: RippleUrl = process.env.RIPPLE_DEVNET_URL || 's.devnet.rippletest.net';
export const NFT_DEVNET_URL: RippleUrl = process.env.RIPPLE_NFT_DEVNET_URL || 'xls20-sandbox.rippletest.net';
export const LOCAL_URL: RippleUrl = process.env.RIPPLE_LOCAL_URL || 'localhost:6006';
