import _ from 'lodash';
import { LoadCurrenciesResponse, SDKContext } from '../models';

/**
 * Retrieves and caches a list of {@link Currencies} being traded on the dEX. Returns a Promise
 * resolving to a {@link LoadCurrenciesResponse}.
 *
 * @category Methods
 *
 * @param reload - (Optional) Whether to refresh the cache
 * @returns A Promise resolving to a {@link LoadCurrenciesResponse} object
 */
async function loadCurrencies(this: SDKContext, reload = false): Promise<LoadCurrenciesResponse> {
  if (!this.currencies || reload) {
    const currencies = await this.fetchCurrencies();
    this.currencies = currencies;
  }
  return this.currencies;
}

export default loadCurrencies;
