import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { FetchOpenOrdersParams, FetchOpenOrdersResponse, MarketSymbol, UnixTimestamp } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Fetches a list of open {@link models.Order}s from the dEX. Returns a {@link models.FetchOpenOrdersResponse} with
 * a list of any Orders found.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
 *
 * @param symbol - (Optional) {@link models.MarketSymbol} to filter Orders by
 * @param since - (Optional) Only return Orders since sdk date
 * @param limit - (Optional) Total number of Orders to return (default is 20)
 * @param params - (Optional) A {@link models.FetchOpenOrdersParams} object
 * @returns {@link models.FetchOpenOrdersResponse}
 */
async function fetchOpenOrders(
  sdk: SDK,
  symbol?: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchOpenOrdersParams = {}
): Promise<FetchOpenOrdersResponse> {
  if (symbol) validateMarketSymbol(symbol);

  const { searchLimit } = params;

  const orders =
    (await sdk.fetchOrders(symbol, since, limit, {
      searchLimit,
      showOpen: true,
      showClosed: false,
      showCanceled: false,
    })) || [];

  return orders;
}

export default fetchOpenOrders;
