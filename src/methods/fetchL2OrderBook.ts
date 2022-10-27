import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { MarketSymbol, FetchL2OrderBookParams, FetchL2OrderBookResponse } from '../models';
import SDK from '../sdk';

/**
 * Retrieves L2 order book data for a single market pair. Returns a {@link models.FetchL2OrderBookResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
 *
 * @param symbol - {@link models.MarketSymbol} to get order book for
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @param params - (Optional) A {@link models.FetchL2OrderBookParams}
 * @returns {@link models.FetchL2OrderBookResponse}
 */
async function fetchL2OrderBook(
  sdk: SDK,
  symbol: MarketSymbol,
  limit: number = DEFAULT_LIMIT,
  params: FetchL2OrderBookParams = {}
): Promise<FetchL2OrderBookResponse | undefined> {
  return await sdk.fetchOrderBook(symbol, limit, params);
}

export default fetchL2OrderBook;
