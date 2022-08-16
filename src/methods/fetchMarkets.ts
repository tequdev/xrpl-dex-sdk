import _ from 'lodash';
import { Client, transferRateToDecimal } from 'xrpl';
import { markets } from '../data';
import { Markets, FetchMarketsResponse } from '../models';

/**
 * Retrieves a list of markets being traded on the dEX. Returns
 * a {@link FetchMarketsResponse}.
 *
 * @category Methods
 */
async function fetchMarkets(this: Client): Promise<FetchMarketsResponse> {
  const response = markets as Markets;

  const marketKeys = Object.keys(response);

  for (let c = 0, cl = marketKeys.length; c < cl; c += 1) {
    const marketKey = marketKeys[c];

    const market = response[marketKey];

    if (market.baseIssuer) {
      const { result: baseIssuerResult } = await this.request({
        command: 'account_info',
        account: market.baseIssuer,
      });

      if (baseIssuerResult.account_data.TransferRate) {
        const baseRate = baseIssuerResult.account_data.TransferRate;
        const baseFee = transferRateToDecimal(typeof baseRate === 'string' ? parseInt(baseRate) : baseRate);
        response[marketKey].baseFee = parseFloat(baseFee);
      }
    }

    if (market.quoteIssuer) {
      const { result: quoteIssuerResult } = await this.request({
        command: 'account_info',
        account: market.quoteIssuer,
      });

      if (quoteIssuerResult.account_data.TransferRate) {
        const quoteRate = quoteIssuerResult.account_data.TransferRate;
        const quoteFee = transferRateToDecimal(typeof quoteRate === 'string' ? parseInt(quoteRate) : quoteRate);
        response[marketKey].quoteFee = parseFloat(quoteFee);
      }
    }
  }

  return response;
}

export default fetchMarkets;
