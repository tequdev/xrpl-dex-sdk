import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { MarketSymbol, SDKContext, FetchL2OrderBookParams, FetchL2OrderBookResponse } from '../models';

/**
 * Retrieves L2 order book data for a single market pair. Returns a {@link FetchL2OrderBookResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
 *
 * @param symbol - {@link MarketSymbol} to get order book for
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @param params - (Optional) A {@link FetchL2OrderBookParams}
 * @returns A {@link FetchL2OrderBookResponse} object
 */
async function fetchL2OrderBook(
  this: SDKContext,
  symbol: MarketSymbol,
  limit: number = DEFAULT_LIMIT,
  params: FetchL2OrderBookParams = {}
): Promise<FetchL2OrderBookResponse> {
  return await this.fetchOrderBook(symbol, limit, params);
}

export default fetchL2OrderBook;
