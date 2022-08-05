import _ from 'lodash';
import { Client } from 'xrpl';
import { currencies } from '../data';
import { Currencies, FetchCurrenciesResponse } from '../models';

/**
 * Retrieves a list of currencies being traded on the dEX. Returns
 * a {@link FetchCurrenciesResponse}.
 *
 * @category Methods
 */
async function fetchCurrencies(this: Client): Promise<FetchCurrenciesResponse> {
  return currencies as Currencies;
}

export default fetchCurrencies;
