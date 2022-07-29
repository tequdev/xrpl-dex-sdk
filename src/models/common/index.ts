import BigNumber from 'bignumber.js';

/**
 * Type Aliases
 */

// Addresses
export type AccountAddress = string;
export type ClassicAddress = string;

// Tokens
export type CurrencyCode = string;
export type MarketSymbol = string;

// Numbers
export type BigNumberish = BigNumber | number | string;

// Identification
export type Sequence = number;
export type Hash = string;

export type OfferId = Sequence;
export type OrderId = Hash;
export type TradeId = Hash;
export type TransactionId = Hash;

/**
 * Parameters
 */
export interface PaginationParams {
  /** Limit the number of transactions to retrieve. */
  limit?: number;
  /** Value from a previous paginated response. Resume retrieving data where that response left off. */
  marker?: unknown;
}
