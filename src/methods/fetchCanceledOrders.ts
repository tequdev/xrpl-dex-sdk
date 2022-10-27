import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { FetchCanceledOrdersParams, FetchCanceledOrdersResponse, MarketSymbol, UnixTimestamp } from '../models';
import SDK from '../sdk';
import { validateMarketSymbol } from '../utils';

/**
 * Fetches a list of canceled {@link models.Order}s from the dEX. Returns a {@link models.FetchCanceledOrdersResponse}
 * with any retrieved Orders.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
 *
 * @param symbol - (Optional) {@link models.MarketSymbol} to filter Orders by
 * @param since - (Optional) Only return Orders since sdk date
 * @param limit - (Optional) Total number of Orders to return (default is 20)
 * @param params - (Optional) A {@link models.FetchCanceledOrdersParams}
 * @returns {@link models.FetchCanceledOrdersResponse}
 */
async function fetchCanceledOrders(
  sdk: SDK,
  symbol?: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchCanceledOrdersParams = {}
): Promise<FetchCanceledOrdersResponse> {
  if (symbol) validateMarketSymbol(symbol);

  const { searchLimit } = params;

  const orders =
    (await sdk.fetchOrders(symbol, since, limit, {
      searchLimit,
      showOpen: false,
      showClosed: false,
      showCanceled: true,
    })) || [];

  return orders;
}

export default fetchCanceledOrders;
