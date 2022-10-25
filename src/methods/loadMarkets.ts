import _ from 'lodash';
import { LoadMarketsResponse, SDKContext } from '../models';

/**
 * Retrieves and caches a list of {@link Markets} being traded on the dEX. Returns a Promise
 * resolving to a {@link LoadMarketsResponse}.
 *
 * @category Methods
 *
 * @param reload - (Optional) Whether to refresh the cache
 * @returns A Promise resolving to a {@link LoadMarketsResponse} object
 */
async function loadMarkets(this: SDKContext, reload = false): Promise<LoadMarketsResponse> {
  if (!this.markets || reload) {
    const markets = await this.fetchMarkets();
    this.markets = markets;
  }
  return this.markets;
}

export default loadMarkets;
