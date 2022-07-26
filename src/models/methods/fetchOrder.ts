import { Order } from 'ccxt';
import { MarketSymbol } from '../common';

export interface FetchOrderParams {}

/**
 * Returns an {@link Order} with the given identifier
 *
 * @category Requests
 */
export interface FetchOrderRequest {
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol;
  /** Number of results to return */
  limit?: number;
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrderParams;
}

/**
 * Expected response from a {@link FetchOrderRequest}.
 *
 * @category Responses
 */
export type FetchOrderResponse = Order;
