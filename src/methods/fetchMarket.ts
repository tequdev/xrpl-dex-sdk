import _ from 'lodash';
import { markets } from '../data';
import { ArgumentsRequired, FetchMarketResponse, MarketSymbol, SDKContext, XrplNetwork } from '../models';
import { validateMarketSymbol } from '../utils';

async function fetchMarket(this: SDKContext, symbol: MarketSymbol): Promise<FetchMarketResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for fetchMarket call');
  validateMarketSymbol(symbol);

  const market = markets[this.params.network || XrplNetwork.Mainnet][symbol];

  if (!market) return;

  const response = market;

  if (market.base !== 'XRP') {
    const baseIssuer = market.base.split('+')[1];
    const baseRate = await this.fetchTransferRate(baseIssuer);
    if (!baseRate.isZero()) response.baseFee = baseRate.toString();
  }

  if (market.quote !== 'XRP') {
    const quoteIssuer = market.quote.split('+')[1];
    const quoteRate = await this.fetchTransferRate(quoteIssuer);
    if (!quoteRate.isZero()) response.quoteFee = quoteRate.toString();
  }

  return response;
}

export default fetchMarket;
