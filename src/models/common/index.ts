import BigNumber from 'bignumber.js';

/**
 * Aliases
 */
export type AccountAddress = string;
export type IssuerAddress = string;
export type Sequence = number;
export type RippleUrl = string;
export type CurrencyCode = `${string}+${IssuerAddress}` | string;
export type MarketSymbol = `${CurrencyCode | string}/${CurrencyCode | string}`;
export type ResponseInfo = Record<string, any>;

/**
 * Datetime
 */
export type UnixTimestamp = number; // ms since Unix epoch
export type XrplTimestamp = number; // ms since Ripple epoch

/**
 * Numbers
 */
export type BigNumberish = BigNumber | number | string;
export type PercentDecimal = string;

// 1 Drop = 0.000001 XRP
// 1000000 Drops = 1 XRP
export type Drops = BigNumberish;

/**
 * Enumerations
 */
export enum XrplNetwork {
  Mainnet = 'mainnet',
  MainnetFullHistory1 = 'mainnet_full_history_1',
  MainnetFullHistory2 = 'mainnet_full_history_2',
  Testnet = 'testnet',
  Devnet = 'devnet',
  NFTDevnet = 'nft_devnet',
  Local = 'local',
}
