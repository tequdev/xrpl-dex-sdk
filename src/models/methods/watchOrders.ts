import { OrderStream } from '../ccxt';

/**
 * Request parameters for a {@link SDK.watchOrders} call.
 *
 * @category Parameters
 */
export interface WatchOrdersParams {
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
 * Expected response from a {@link SDK.watchOrders} call.
 *
 * @category Responses
 */
export type WatchOrdersResponse = OrderStream;
