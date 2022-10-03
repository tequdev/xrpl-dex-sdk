import _ from 'lodash';
import { transferRateToDecimal } from 'xrpl';
import { currencies } from '../data';
import { FetchCurrenciesResponse, SDKContext, XrplNetwork } from '../models';
import { parseCurrencyCode } from '../utils';

/**
 * Retrieves a list of currencies being traded on the dEX. Returns
 * a {@link FetchCurrenciesResponse}.
 *
 * @category Methods
 */
async function fetchCurrencies(this: SDKContext): Promise<FetchCurrenciesResponse> {
  if (this.currencies) return this.currencies;

  const response = currencies[this.params.network || XrplNetwork.Mainnet];

  for (const currencyCode in response) {
    const { issuer } = parseCurrencyCode(currencyCode);

    if (issuer) {
      const { result: accountInfoResult } = await this.client.request({
        command: 'account_info',
        account: issuer,
      });

      if (accountInfoResult.account_data.TransferRate) {
        const rate = accountInfoResult.account_data.TransferRate;
        const fee = transferRateToDecimal(rate);
        response[currencyCode].fee = fee;
      }
    }
  }

  return response;
}

export default fetchCurrencies;
