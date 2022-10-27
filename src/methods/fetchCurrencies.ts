import _ from 'lodash';
import { transferRateToDecimal } from 'xrpl';
import { currencies } from '../data';
import { FetchCurrenciesResponse, XrplNetwork } from '../models';
import { parseCurrencyCode } from '../utils';
import SDK from '../sdk';

/**
 * Retrieves a list of {@link models.Currencies} being traded on the dEX. Returns a {@link models.FetchCurrenciesResponse}.
 *
 * @category Methods
 *
 * @returns {@link models.FetchCurrenciesResponse}
 */
async function fetchCurrencies(sdk: SDK): Promise<FetchCurrenciesResponse> {
  const response = currencies[sdk.params.network || XrplNetwork.Mainnet];

  for (const currencyCode in response) {
    const { issuer } = parseCurrencyCode(currencyCode);

    if (issuer) {
      const { result: accountInfoResult } = await sdk.client.request({
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
