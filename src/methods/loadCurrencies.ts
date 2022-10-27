import _ from 'lodash';
import { LoadCurrenciesResponse } from '../models';
import SDK from '../sdk';

/**
 * Retrieves and caches a list of {@link models.Currencies} being traded on the dEX. Returns a Promise
 * resolving to a {@link models.LoadCurrenciesResponse}.
 *
 * @category Methods
 *
 * @param reload - (Optional) Whether to refresh the cache
 * @returns {@link models.LoadCurrenciesResponse}
 */
async function loadCurrencies(sdk: SDK, reload = false): Promise<LoadCurrenciesResponse> {
  if (!sdk.currencies || reload) {
    const currencies = await sdk.fetchCurrencies();
    sdk.currencies = currencies;
  }
  return sdk.currencies;
}

export default loadCurrencies;
