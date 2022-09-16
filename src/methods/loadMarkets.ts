import _ from 'lodash';
import { LoadMarketsResponse, SDKContext } from '../models';
import fetchMarkets from './fetchMarkets';

/**
 * Retrieves and caches a list of markets being traded on the dEX.
 * Returns a {@link LoadMarketsResponse}.
 *
 * @category Methods
 */
async function loadMarkets(this: SDKContext, reload = false): Promise<LoadMarketsResponse | undefined> {
  if (!this.markets || reload) {
    const markets = await fetchMarkets.call(this);
    this.markets = markets;
  }
  return this.markets;
}

export default loadMarkets;
