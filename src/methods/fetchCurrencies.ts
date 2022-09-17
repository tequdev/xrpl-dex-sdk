import _ from 'lodash';
import { transferRateToDecimal } from 'xrpl';
import { currencies } from '../data';
import { FetchCurrenciesResponse, SDKContext, XrplNetwork } from '../models';

/**
 * Retrieves a list of currencies being traded on the dEX. Returns
 * a {@link FetchCurrenciesResponse}.
 *
 * @category Methods
 */
async function fetchCurrencies(this: SDKContext): Promise<FetchCurrenciesResponse> {
  if (this.currencies) return this.currencies;

  const response = currencies[this.params.network || XrplNetwork.Mainnet];

  const currencyKeys = Object.keys(response);

  for (let c = 0, cl = currencyKeys.length; c < cl; c += 1) {
    const currencyKey = currencyKeys[c];

    for (let i = 0, il = response[currencyKey].length; i < il; i += 1) {
      const currency = response[currencyKey][i];

      const { result: accountInfoResult } = await this.client.request({
        command: 'account_info',
        account: currency.issuer,
      });

      if (accountInfoResult.account_data.TransferRate) {
        const rate = accountInfoResult.account_data.TransferRate;
        const fee = transferRateToDecimal(typeof rate === 'string' ? parseInt(rate) : rate);
        response[currencyKey][i].fee = parseFloat(fee);
      }
    }
  }

  return response;
}

export default fetchCurrencies;
