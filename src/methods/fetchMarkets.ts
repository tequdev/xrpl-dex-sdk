import _ from 'lodash';
import { transferRateToDecimal } from 'xrpl';
import { markets } from '../data';
import { FetchMarketsResponse, SDKContext, XrplNetwork } from '../models';

/**
 * Retrieves a list of markets being traded on the dEX. Returns
 * a {@link FetchMarketsResponse}.
 *
 * @category Methods
 */
async function fetchMarkets(this: SDKContext): Promise<FetchMarketsResponse> {
  if (this.markets) return this.markets;

  const response = markets[this.params.network || XrplNetwork.Mainnet];

  const marketKeys = Object.keys(response);

  for (let c = 0, cl = marketKeys.length; c < cl; c += 1) {
    const marketKey = marketKeys[c];

    const market = response[marketKey];

    if (market.baseIssuer) {
      const { result: baseIssuerResult } = await this.client.request({
        command: 'account_info',
        account: market.baseIssuer,
      });

      if (baseIssuerResult.account_data.TransferRate) {
        const baseRate = baseIssuerResult.account_data.TransferRate;
        const baseFee = transferRateToDecimal(typeof baseRate === 'string' ? parseInt(baseRate) : baseRate);
        response[marketKey].baseFee = baseFee;
      }
    }

    if (market.quoteIssuer) {
      const { result: quoteIssuerResult } = await this.client.request({
        command: 'account_info',
        account: market.quoteIssuer,
      });

      if (quoteIssuerResult.account_data.TransferRate) {
        const quoteRate = quoteIssuerResult.account_data.TransferRate;
        const quoteFee = transferRateToDecimal(typeof quoteRate === 'string' ? parseInt(quoteRate) : quoteRate);
        response[marketKey].quoteFee = quoteFee;
      }
    }
  }

  return response;
}

export default fetchMarkets;
