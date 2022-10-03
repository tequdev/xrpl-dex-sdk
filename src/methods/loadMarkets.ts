import _ from 'lodash';
import { LoadMarketsResponse, SDKContext } from '../models';

/**
 * Retrieves and caches a list of markets being traded on the dEX.
 * Returns a {@link LoadMarketsResponse}.
 *
 * @category Methods
 */
async function loadMarkets(this: SDKContext, reload = false): Promise<LoadMarketsResponse> {
  if (!this.markets || reload) {
    const markets = await this.fetchMarkets();
    this.markets = markets;
  }
  return this.markets;
}

export default loadMarkets;
