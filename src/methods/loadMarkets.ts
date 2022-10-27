import _ from 'lodash';
import { LoadMarketsResponse } from '../models';
import SDK from '../sdk';

/**
 * Retrieves and caches a list of {@link models.Market}s being traded on the dEX. Returns a Promise
 * resolving to a {@link models.LoadMarketsResponse}.
 *
 * @category Methods
 *
 * @param reload - (Optional) Whether to refresh the cache
 * @returns {@link models.LoadMarketsResponse}
 */
async function loadMarkets(sdk: SDK, reload = false): Promise<LoadMarketsResponse> {
  if (!sdk.markets || reload) {
    const markets = await sdk.fetchMarkets();
    sdk.markets = markets;
  }
  return sdk.markets;
}

export default loadMarkets;
