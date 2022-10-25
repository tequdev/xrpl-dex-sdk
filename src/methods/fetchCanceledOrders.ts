import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import {
  FetchCanceledOrdersParams,
  FetchCanceledOrdersResponse,
  MarketSymbol,
  UnixTimestamp,
  SDKContext,
} from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Fetches a list of canceled {@link Orders} from the dEX. Returns a {@link FetchCanceledOrdersResponse}
 * with any retrieved Orders.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
 *
 * @param symbol - (Optional) {@link MarketSymbol} to filter Orders by
 * @param since - (Optional) Only return Orders since this date
 * @param limit - (Optional) Total number of Orders to return (default is 20)
 * @param params - (Optional) A {@link FetchCanceledOrdersParams}
 * @returns A {@link FetchCanceledOrdersResponse} object
 */
async function fetchCanceledOrders(
  this: SDKContext,
  symbol?: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchCanceledOrdersParams = {}
): Promise<FetchCanceledOrdersResponse> {
  if (symbol) validateMarketSymbol(symbol);

  const { searchLimit } = params;

  const orders =
    (await this.fetchOrders(symbol, since, limit, {
      searchLimit,
      showOpen: false,
      showClosed: false,
      showCanceled: true,
    })) || [];

  return orders;
}

export default fetchCanceledOrders;
