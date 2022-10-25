import { OrderBookStream } from '../ccxt/OrderBook';

/**
 * Expected response from a {@link SDK.watchOrderBook} call.
 *
 * @category Responses
 */
export type WatchOrderBookResponse = OrderBookStream;
