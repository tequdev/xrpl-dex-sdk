import _ from 'lodash';
import { MarketSymbol, FetchTickersParams, Ticker, FetchTickersResponse, SDKContext } from '../models';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link FetchTickerResponse}.
 *
 * @category Methods
 */
async function fetchTickers(
  this: SDKContext,
  /** Array of token pairs (called Unified Market Symbols in CCXT) */
  symbols: MarketSymbol[],
  /** Parameters specific to the exchange API endpoint */
  params: FetchTickersParams = {}
): Promise<FetchTickersResponse> {
  const tickers: Ticker[] = [];

  for (const symbol of symbols) {
    const ticker = await this.fetchTicker(symbol, params);
    if (ticker) tickers.push(ticker);
  }

  return tickers;
}

export default fetchTickers;
