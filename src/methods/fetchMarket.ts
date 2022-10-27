import _ from 'lodash';
import { markets } from '../data';
import { ArgumentsRequired, FetchMarketResponse, MarketNotFound, MarketSymbol, XrplNetwork } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Retrieves info for a single {@link models.Market} being traded on the dEX. Returns a
 * {@link models.FetchMarketsResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link models.MarketSymbol} of the market to get info for
 * @returns {@link models.FetchMarketsResponse} or undefined
 *
 * @throws {@link models.ArgumentsRequired}
 * Thrown if any required function arguments are missing
 *
 * @throws {@link models.BadSymbol}
 * Thrown if the provided MarketSymbol is invalid
 *
 * @throws {@link models.MarketNotFound}
 * Thrown if data about the market could not be found
 */
async function fetchMarket(sdk: SDK, symbol: MarketSymbol): Promise<FetchMarketResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for fetchMarket call');
  validateMarketSymbol(symbol);

  const market = markets[sdk.params.network || XrplNetwork.Mainnet][symbol];

  if (!market) throw new MarketNotFound(`No data found for market pair "${symbol}"`);

  const response = market;

  if (market.base !== 'XRP') {
    const baseIssuer = market.base.split('+')[1];
    const baseRate = await sdk.fetchTransferRate(baseIssuer);
    if (!baseRate.isZero()) response.baseFee = baseRate.toString();
  }

  if (market.quote !== 'XRP') {
    const quoteIssuer = market.quote.split('+')[1];
    const quoteRate = await sdk.fetchTransferRate(quoteIssuer);
    if (!quoteRate.isZero()) response.quoteFee = quoteRate.toString();
  }

  return response;
}

export default fetchMarket;
