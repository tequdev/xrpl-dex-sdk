import { FetchTradingFeesResponse, MarketSymbol } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Fetches information about the fees incurred while trading on any {@link models.Market}. Returns a
 * {@link models.FetchTradingFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @returns {@link models.FetchTradingFeesResponse}
 */
async function fetchTradingFees(sdk: SDK): Promise<FetchTradingFeesResponse> {
  const markets = await sdk.fetchMarkets();

  if (!markets) return [];

  const tradingFees: FetchTradingFeesResponse = [];

  for (const symbol in markets) {
    validateMarketSymbol(symbol as MarketSymbol);
    const tradingFee = await sdk.fetchTradingFee(symbol as MarketSymbol);
    if (tradingFee) tradingFees.push(tradingFee);
  }

  return tradingFees;
}

export default fetchTradingFees;
