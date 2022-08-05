import _ from 'lodash';
import { Client } from 'xrpl';
import { markets } from '../data';
import { Markets, FetchMarketsResponse } from '../models';

/**
 * Retrieves a list of markets being traded on the dEX. Returns
 * a {@link FetchMarketsResponse}.
 *
 * @category Methods
 */
async function fetchMarkets(this: Client): Promise<FetchMarketsResponse> {
  return markets as Markets;
}

export default fetchMarkets;
