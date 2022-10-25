import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { SDKContext, FetchOrderBooksParams, FetchOrderBooksResponse, MarketSymbol, ArgumentsRequired } from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Retrieves order book data for multiple {@link Market} pairs. Returns a {@link FetchOrderBooksResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
 *
 * @param symbols - Array of {@link MarketSymbol}s to get order books for
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @param params - (Optional) A {@link FetchOrderBookParams} object
 * @returns A {@link FetchOrderBooksResponse} object
 */
async function fetchOrderBooks(
  this: SDKContext,
  symbols: MarketSymbol[],
  limit: number = DEFAULT_LIMIT,
  params: FetchOrderBooksParams
): Promise<FetchOrderBooksResponse> {
  if (!symbols) throw new ArgumentsRequired('Missing required arguments for fetchOrderBooks call');
  const orderBooks: FetchOrderBooksResponse = {};

  for (let s = 0, sl = symbols.length; s < sl; s += 1) {
    const symbol = symbols[s];
    validateMarketSymbol(symbol);
    const orderBook = await this.fetchOrderBook(symbol, limit, params[symbol] || {});
    if (orderBook) orderBooks[symbol] = orderBook;
  }

  return orderBooks;
}

export default fetchOrderBooks;
