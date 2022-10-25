import { Order } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchOrders} call.
 *
 * @category Parameters
 */
export interface FetchOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  searchLimit?: number;
  /** Whether to return Open orders */
  showOpen?: boolean;
  /** Whether to return Closed orders */
  showClosed?: boolean;
  /** Whether to return Canceled orders */
  showCanceled?: boolean;
}

/**
 * Expected response from a {@link SDK.fetchOrders} call.
 *
 * @category Responses
 */
export type FetchOrdersResponse = Order[];
