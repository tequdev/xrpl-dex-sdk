import BigNumber from 'bignumber.js';

/**
 * Aliases
 */
export type AccountAddress = string;
export type IssuerAddress = string;
export type Sequence = string | number;

/** OrderIds use the format "[AccountAddress]:[Sequence]" */
export type AccountSequencePair = string;

/** Market symbols use the format "[CurrencyCode]+[IssuerAddress]" */
export type CurrencyIssuerPair = string;

export type RippleUrl = string;

export type CurrencyCode = `${string}+${IssuerAddress}` | string;
export type MarketSymbol = `${CurrencyCode | string}/${CurrencyCode | string}`;

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
// 1000000 Drops = 1
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

/**
 * Parameters
 */
export interface PaginationParams {
  /** Limit the number of transactions to retrieve. */
  limit?: number;
  /** Value from a previous paginated response. Resume retrieving data where that response left off. */
  marker?: unknown;
}

/**
 * Requests
 */
export interface BaseParams {
  network?: XrplNetwork;
}

/**
 * Responses
 */
export interface BaseResponse {
  info: Record<string, any>;
}
