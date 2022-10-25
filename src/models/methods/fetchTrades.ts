import { Trade } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchTrades} call.
 * 
 * @category Parameters
 */
export interface FetchTradesParams {
  /** Max Transactions to search through looking for Trade data */
  searchLimit: number;
}

/**
 * Expected response from a {@link SDK.fetchTrades} call.
 *
 * @category Responses
 */
export type FetchTradesResponse = Trade[];
