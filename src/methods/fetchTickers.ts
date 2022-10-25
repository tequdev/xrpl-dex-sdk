import _ from 'lodash';
import {
  MarketSymbol,
  FetchTickersParams,
  Ticker,
  FetchTickersResponse,
  SDKContext,
  ArgumentsRequired,
} from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Retrieves price {@link Ticker} data for multiple {@link Market} pairs. Returns a
 * {@link FetchTickersResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#multiple-tickers-for-all-or-many-symbols
 *
 * @param symbols - Array of {@link MarketSymbol}s to get price ticker data for
 * @param params - (Optional) A {@link FetchTickersParams} object
 * @returns A {@link FetchTickersResponse} object
 */
async function fetchTickers(
  this: SDKContext,
  symbols: MarketSymbol[],
  params: FetchTickersParams = {}
): Promise<FetchTickersResponse> {
  if (!symbols) throw new ArgumentsRequired('Missing required arguments for fetchTickers call');
  const tickers: Ticker[] = [];

  for (const symbol of symbols) {
    validateMarketSymbol(symbol);
    const ticker = await this.fetchTicker(symbol, params);
    if (ticker) tickers.push(ticker);
  }

  return tickers;
}

export default fetchTickers;
