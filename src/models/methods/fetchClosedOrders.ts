import { Order } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchClosedOrders} call.
 *
 * @category Parameters
 */
export interface FetchClosedOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  searchLimit?: number;
}

/**
 * Expected response from a {@link SDK.fetchClosedOrders} call.
 *
 * @category Responses
 */
export type FetchClosedOrdersResponse = Order[];
