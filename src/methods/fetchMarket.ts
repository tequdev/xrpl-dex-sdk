import _ from 'lodash';
import { transferRateToDecimal } from 'xrpl';
import { markets } from '../data';
import { FetchMarketResponse, MarketSymbol, SDKContext, XrplNetwork } from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Retrieves info about a single market being traded on the dEX.
 * Returns a {@link FetchMarketResponse}.
 *
 * @category Methods
 */
async function fetchMarket(this: SDKContext, symbol: MarketSymbol): Promise<FetchMarketResponse> {
  validateMarketSymbol(symbol);

  if (this.markets && this.markets[symbol]) return this.markets[symbol];

  const market = markets[this.params.network || XrplNetwork.Mainnet][symbol];

  if (!market) return;

  const response = market;

  if (market.base !== 'XRP') {
    const baseIssuer = market.base.split('+')[1];
    const { result: baseIssuerResult } = await this.client.request({
      command: 'account_info',
      account: baseIssuer,
    });

    if (baseIssuerResult.account_data.TransferRate) {
      response.baseFee = transferRateToDecimal(baseIssuerResult.account_data.TransferRate);
    }
  }

  if (market.quote !== 'XRP') {
    const quoteIssuer = market.quote.split('+')[1];
    const { result: quoteIssuerResult } = await this.client.request({
      command: 'account_info',
      account: quoteIssuer,
    });

    if (quoteIssuerResult.account_data.TransferRate) {
      response.quoteFee = transferRateToDecimal(quoteIssuerResult.account_data.TransferRate);
    }
  }

  return response;
}

export default fetchMarket;
