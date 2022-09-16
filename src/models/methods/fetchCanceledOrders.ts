import { Order } from '../ccxt';

export interface FetchCanceledOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  maxSearch?: number;
}

/**
 * Expected response from a {@link FetchCanceledOrdersRequest}.
 *
 * @category Responses
 */
export type FetchCanceledOrdersResponse = Order[];
