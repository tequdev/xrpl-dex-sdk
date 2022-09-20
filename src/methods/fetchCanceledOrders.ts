import _ from 'lodash';
import { DEFAULT_LIMIT } from '../constants';
import {
  FetchCanceledOrdersParams,
  FetchCanceledOrdersResponse,
  MarketSymbol,
  UnixTimestamp,
  SDKContext,
} from '../models';

async function fetchCanceledOrders(
  this: SDKContext,
  /** Filter Orders by market symbol */
  symbol?: MarketSymbol,
  /** Only return Orders since this date */
  since?: UnixTimestamp,
  /** Total number of Orders to return */
  limit: number = DEFAULT_LIMIT,
  /** eslint-disable-next-line */
  params: FetchCanceledOrdersParams = {}
): Promise<FetchCanceledOrdersResponse> {
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
