import _ from 'lodash';
import { LoadCurrenciesResponse, SDKContext } from '../models';
import fetchCurrencies from './fetchCurrencies';

/**
 * Retrieves and caches a list of currencies being traded on the dEX.
 * Returns a {@link LoadCurrenciesResponse}.
 *
 * @category Methods
 */
async function loadCurrencies(this: SDKContext, reload = false): Promise<LoadCurrenciesResponse | undefined> {
  if (!this.currencies || reload) {
    const currencies = await fetchCurrencies.call(this);
    this.currencies = currencies;
  }
  return this.currencies;
}

export default loadCurrencies;
