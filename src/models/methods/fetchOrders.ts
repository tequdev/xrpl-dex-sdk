import { Order } from '../ccxt';

export interface FetchOrdersParams {
  /** Max Transactions to search through looking for Order data before giving up */
  maxSearch?: number;
  /** Whether to return Open orders */
  showOpen?: boolean;
  /** Whether to return Closed orders */
  showClosed?: boolean;
  /** Whether to return Canceled orders */
  showCanceled?: boolean;
}

/**
 * Expected response from a {@link FetchOrdersRequest}.
 *
 * @category Responses
 */
export type FetchOrdersResponse = Order[];
