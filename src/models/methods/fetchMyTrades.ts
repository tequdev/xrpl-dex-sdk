import { Trade } from '../ccxt';

export interface FetchMyTradesParams {
  /** Max Transactions to search through looking for Trade data */
  searchLimit?: number;
}

/**
 * Expected response from a {@link FetchMyTradesRequest}.
 *
 * @category Responses
 */
export type FetchMyTradesResponse = Trade[];
