import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { FetchOrderBooksParams, FetchOrderBooksResponse, MarketSymbol, ArgumentsRequired } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Retrieves order book data for multiple {@link models.Market} pairs. Returns a {@link models.FetchOrderBooksResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
 *
 * @param symbols - Array of {@link models.MarketSymbol}s to get order books for
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @param params - (Optional) A {@link models.FetchOrderBookParams} object
 * @returns {@link models.FetchOrderBooksResponse}
 */
async function fetchOrderBooks(
  sdk: SDK,
  symbols: MarketSymbol[],
  limit: number = DEFAULT_LIMIT,
  params: FetchOrderBooksParams = {}
): Promise<FetchOrderBooksResponse> {
  if (!symbols) throw new ArgumentsRequired('Missing required arguments for fetchOrderBooks call');
  const orderBooks: FetchOrderBooksResponse = {};

  for (let s = 0, sl = symbols.length; s < sl; s += 1) {
    const symbol = symbols[s];
    validateMarketSymbol(symbol);
    const orderBook = await sdk.fetchOrderBook(symbol, limit, params[symbol] ?? {});
    if (orderBook) orderBooks[symbol] = orderBook;
  }

  return orderBooks;
}

export default fetchOrderBooks;
