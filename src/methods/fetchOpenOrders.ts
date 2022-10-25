import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { FetchOpenOrdersParams, FetchOpenOrdersResponse, MarketSymbol, UnixTimestamp, SDKContext } from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Fetches a list of open {@link Order}s from the dEX. Returns a {@link FetchOpenOrdersResponse} with
 * a list of any Orders found.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
 *
 * @param symbol - (Optional) {@link MarketSymbol} to filter Orders by
 * @param since - (Optional) Only return Orders since this date
 * @param limit - (Optional) Total number of Orders to return (default is 20)
 * @param params - (Optional) A {@link FetchOpenOrdersParams} object
 * @returns A {@link FetchOpenOrdersResponse} object
 */
async function fetchOpenOrders(
  this: SDKContext,
  symbol?: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchOpenOrdersParams = {}
): Promise<FetchOpenOrdersResponse> {
  if (symbol) validateMarketSymbol(symbol);

  const { searchLimit } = params;

  const orders =
    (await this.fetchOrders(symbol, since, limit, {
      searchLimit,
      showOpen: true,
      showClosed: false,
      showCanceled: false,
    })) || [];

  return orders;
}

export default fetchOpenOrders;
