import _ from 'lodash';
import { Client, transferRateToDecimal } from 'xrpl';
import { markets } from '../data';
import { Markets, FetchMarketResponse, MarketSymbol } from '../models';

/**
 * Retrieves info about a single market being traded on the dEX.
 * Returns a {@link FetchMarketResponse}.
 *
 * @category Methods
 */
async function fetchMarket(this: Client, symbol: MarketSymbol): Promise<FetchMarketResponse | undefined> {
  const market = (markets as Markets)[symbol];

  if (!market) return;

  const response = market;

  if (market.baseIssuer) {
    const { result: baseIssuerResult } = await this.request({
      command: 'account_info',
      account: market.baseIssuer,
    });

    if (baseIssuerResult.account_data.TransferRate) {
      const baseRate = baseIssuerResult.account_data.TransferRate || 0;
      const baseFee = transferRateToDecimal(typeof baseRate === 'string' ? parseInt(baseRate) : baseRate);
      response.baseFee = parseFloat(baseFee);
    }
  }

  if (market.quoteIssuer) {
    const { result: quoteIssuerResult } = await this.request({
      command: 'account_info',
      account: market.quoteIssuer,
    });

    if (quoteIssuerResult.account_data.TransferRate) {
      const quoteRate = quoteIssuerResult.account_data.TransferRate || 0;
      const quoteFee = transferRateToDecimal(typeof quoteRate === 'string' ? parseInt(quoteRate) : quoteRate);
      response.quoteFee = parseFloat(quoteFee);
    }
  }

  return response;
}

export default fetchMarket;
