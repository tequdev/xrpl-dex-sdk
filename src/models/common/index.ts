import BigNumber from 'bignumber.js';

/**
 * Aliases
 */
export type AccountAddress = string;
export type Sequence = string;

export type RippleUrl = string;

// Tokens
export type CurrencyCode = string;
export type MarketSymbol = string;

/**
 * Numbers
 */
export type BigNumberish = BigNumber | number | string;

export type PercentDecimal = number;

// Drops are 0.000001 XRP
export type Drops = BigNumberish;

/**
 * Enumerations
 */
export enum RippleNetwork {
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
  network?: RippleNetwork;
}

/**
 * Responses
 */
export interface BaseResponse {
  info: unknown;
}
