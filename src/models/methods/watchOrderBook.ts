import { OrderBookStream } from '../ccxt/OrderBook';

/**
 * Expected response from a watchOrderBook call
 *
 * @category Responses
 */
export type WatchOrderBookResponse = OrderBookStream;
