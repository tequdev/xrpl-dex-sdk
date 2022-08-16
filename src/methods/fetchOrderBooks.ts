import _ from 'lodash';
import { Client } from 'xrpl';
import { DEFAULT_LIMIT } from '../constants';
import { FetchOrderBooksParams, FetchOrderBooksResponse, MarketSymbol } from '../models';
import fetchOrderBook from './fetchOrderBook';

/**
 * Retrieves order book data for multiple market pairs. Returns an
 * {@link FetchOrderBooksResponse}.
 *
 * @category Methods
 */
async function fetchOrderBooks(
  this: Client,
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
    orderBooks[symbol] = await fetchOrderBook.call(this, symbol, limit, params[symbol] || {});
  }

  return orderBooks;
}

export default fetchOrderBooks;
