import { Order } from '../ccxt';

export interface FetchOpenOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  maxSearch?: number;
}

/**
 * Expected response from a {@link FetchOpenOrdersRequest}.
 *
 * @category Responses
 */
export type FetchOpenOrdersResponse = Order[];
