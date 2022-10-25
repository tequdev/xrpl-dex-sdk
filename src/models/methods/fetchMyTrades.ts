import { Trade } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchMyTrades} call.
 *
 * @category Parameters
 */
export interface FetchMyTradesParams {
  /** Max Transactions to search through looking for Trade data */
  searchLimit: number;
}

/**
 * Expected response from a {@link SDK.fetchMyTrades} call.
 *
 * @category Responses
 */
export type FetchMyTradesResponse = Trade[];
