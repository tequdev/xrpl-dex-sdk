import { Order } from '../ccxt';

export interface FetchClosedOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  maxSearch?: number;
}

/**
 * Expected response from a {@link FetchClosedOrdersRequest}.
 *
 * @category Responses
 */
export type FetchClosedOrdersResponse = Order[];
