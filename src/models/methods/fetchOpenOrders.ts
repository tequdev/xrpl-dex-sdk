import { Order } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchOpenOrders} call.
 *
 * @category Parameters
 */
export interface FetchOpenOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  searchLimit?: number;
}

/**
 * Expected response from a {@link SDK.fetchOpenOrders} call.
 *
 * @category Responses
 */
export type FetchOpenOrdersResponse = Order[];
