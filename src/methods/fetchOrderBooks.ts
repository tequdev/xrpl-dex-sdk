import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { SDKContext, FetchOrderBooksParams, FetchOrderBooksResponse, MarketSymbol } from '../models';

/**
 * Retrieves order book data for multiple market pairs. Returns an
 * {@link FetchOrderBooksResponse}.
 *
 * @category Methods
 */
async function fetchOrderBooks(
  this: SDKContext,
  /** Array of token pairs (called Unified Market Symbols in CCXT) */
  symbols: MarketSymbol[],
  /** Number of results to return */
  limit: number = DEFAULT_LIMIT,
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrderBooksParams
): Promise<FetchOrderBooksResponse> {
  const orderBooks: FetchOrderBooksResponse = {};

  for (let s = 0, sl = symbols.length; s < sl; s += 1) {
    const symbol = symbols[s];
    const orderBook = await this.fetchOrderBook(symbol, limit, params[symbol] || {});
    if (orderBook) orderBooks[symbol] = orderBook;
  }

  return orderBooks;
}

export default fetchOrderBooks;
