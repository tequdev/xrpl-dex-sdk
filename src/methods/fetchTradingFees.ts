import { SDKContext, FetchTradingFeesResponse, MarketSymbol } from '../models';

/**
 * Returns information about the fees incurred while trading on any market.
 * Returns a {@link FetchTradingFeesResponse}.
 *
 * @category Methods
 */
async function fetchTradingFees(this: SDKContext): Promise<FetchTradingFeesResponse> {
  const markets = await this.fetchMarkets();

  if (!markets) [];

  const tradingFees: FetchTradingFeesResponse = [];

  for (const symbol in markets) {
    const tradingFee = await this.fetchTradingFee(symbol as MarketSymbol);
    if (tradingFee) tradingFees.push(tradingFee);
  }

  return tradingFees;
}

export default fetchTradingFees;
