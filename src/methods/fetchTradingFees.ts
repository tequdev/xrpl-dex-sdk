import { SDKContext, FetchTradingFeesResponse, MarketSymbol } from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Fetches information about the fees incurred while trading on any {@link Market}. Returns a
 * {@link FetchTradingFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @returns A {@link FetchTradingFeesResponse} object
 */
async function fetchTradingFees(this: SDKContext): Promise<FetchTradingFeesResponse> {
  const markets = await this.fetchMarkets();

  if (!markets) return [];

  const tradingFees: FetchTradingFeesResponse = [];

  for (const symbol in markets) {
    validateMarketSymbol(symbol as MarketSymbol);
    const tradingFee = await this.fetchTradingFee(symbol as MarketSymbol);
    if (tradingFee) tradingFees.push(tradingFee);
  }

  return tradingFees;
}

export default fetchTradingFees;
