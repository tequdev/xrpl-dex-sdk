import _ from 'lodash';
import { LoadCurrenciesResponse, SDKContext } from '../models';

/**
 * Retrieves and caches a list of currencies being traded on the dEX.
 * Returns a {@link LoadCurrenciesResponse}.
 *
 * @category Methods
 */
async function loadCurrencies(this: SDKContext, reload = false): Promise<LoadCurrenciesResponse> {
  if (!this.currencies || reload) {
    const currencies = await this.fetchCurrencies();
    this.currencies = currencies;
  }
  return this.currencies;
}

export default loadCurrencies;
