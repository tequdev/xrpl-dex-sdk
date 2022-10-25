import { Order } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchCanceledOrders} call.
 *
 * @category Parameters
 */
export interface FetchCanceledOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  searchLimit?: number;
}

/**
 * Expected response from a {@link SDK.fetchCanceledOrders} call.
 *
 * @category Responses
 */
export type FetchCanceledOrdersResponse = Order[];
