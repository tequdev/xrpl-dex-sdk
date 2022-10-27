import _ from 'lodash';
import { MarketSymbol, FetchTickersParams, Ticker, FetchTickersResponse, ArgumentsRequired } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Retrieves price {@link models.Ticker} data for multiple {@link models.Market} pairs. Returns a
 * {@link models.FetchTickersResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#multiple-tickers-for-all-or-many-symbols
 *
 * @param symbols - Array of {@link models.MarketSymbol}s to get price ticker data for
 * @param params - (Optional) A {@link models.FetchTickersParams} object
 * @returns {@link models.FetchTickersResponse}
 */
async function fetchTickers(
  sdk: SDK,
  symbols: MarketSymbol[],
  params: FetchTickersParams = {}
): Promise<FetchTickersResponse> {
  if (!symbols) throw new ArgumentsRequired('Missing required arguments for fetchTickers call');
  const tickers: Ticker[] = [];

  for (const symbol of symbols) {
    validateMarketSymbol(symbol);
    const ticker = await sdk.fetchTicker(symbol, params);
    if (ticker) tickers.push(ticker);
  }

  return tickers;
}

export default fetchTickers;
