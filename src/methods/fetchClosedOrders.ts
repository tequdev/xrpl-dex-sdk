import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import { FetchClosedOrdersParams, FetchClosedOrdersResponse, MarketSymbol, UnixTimestamp, SDKContext } from '../models';

async function fetchClosedOrders(
  this: SDKContext,
  /** Filter Orders by market symbol */
  symbol?: MarketSymbol,
  /** Only return Orders since this date */
  since?: UnixTimestamp,
  /** Total number of Orders to return */
  limit: number = DEFAULT_LIMIT,
  /** eslint-disable-next-line */
  params: FetchClosedOrdersParams = {}
): Promise<FetchClosedOrdersResponse> {
  const { searchLimit } = params;

  const orders =
    (await this.fetchOrders(symbol, since, limit, {
      searchLimit,
      showOpen: false,
      showClosed: true,
      showCanceled: false,
    })) || [];

  return orders;
}

export default fetchClosedOrders;
