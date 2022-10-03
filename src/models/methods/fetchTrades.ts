import { Trade } from '../ccxt';

export interface FetchTradesParams {
  /** Max Transactions to search through looking for Trade data */
  searchLimit?: number;
}

/**
 * Expected response from a {@link FetchTradesRequest}.
 *
 * @category Responses
 */
export type FetchTradesResponse = Trade[];
