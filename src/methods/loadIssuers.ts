import _ from 'lodash';
import { LoadIssuersResponse } from '../models';
import SDK from '../sdk';

/**
 * Retrieves and caches a list of {@link models.Issuer}s whose {@link models.Currency | Currencies} are being traded on the dEX.
 * Returns a Promise resolving to a {@link models.LoadIssuersResponse}.
 *
 * @category Methods
 *
 * @param reload - (Optional) Whether to refresh the cache
 * @returns {@link models.LoadIssuersResponse}
 */
async function loadIssuers(sdk: SDK, reload = false): Promise<LoadIssuersResponse> {
  if (!sdk.issuers || reload) {
    const issuers = await sdk.fetchIssuers();
    sdk.issuers = issuers;
  }
  return sdk.issuers;
}

export default loadIssuers;
