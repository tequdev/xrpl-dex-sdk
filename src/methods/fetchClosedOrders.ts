import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { FetchClosedOrdersParams, FetchClosedOrdersResponse, MarketSymbol, UnixTimestamp } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Fetches a list of closed {@link models.Order}s from the dEX. Returns a {@link models.FetchClosedOrdersResponse}
 * with any retrieved Orders.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
 *
 * @param symbol - (Optional) {@link models.MarketSymbol} to filter Orders by
 * @param since - (Optional) Only return Orders since sdk date
 * @param limit - (Optional) Total number of Orders to return (default is 20)
 * @param params - (Optional) A {@link models.FetchClosedOrdersResponse}
 * @returns {@link models.FetchClosedOrdersResponse}
 */
async function fetchClosedOrders(
  sdk: SDK,
  symbol?: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchClosedOrdersParams = {}
): Promise<FetchClosedOrdersResponse> {
  if (symbol) validateMarketSymbol(symbol);

  const { searchLimit } = params;

  const orders =
    (await sdk.fetchOrders(symbol, since, limit, {
      searchLimit,
      showOpen: false,
      showClosed: true,
      showCanceled: false,
    })) || [];

  return orders;
}

export default fetchClosedOrders;
