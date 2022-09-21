import _ from 'lodash';
import {
  MarketSymbol,
  FetchTickersParams,
  Ticker,
  FetchTickersResponse,
  SDKContext,
  FetchTickerParams,
} from '../models';
import { parseMarketSymbol } from '../utils';

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
  params: FetchTickersParams
): Promise<FetchTickersResponse | undefined> {
  const { issuers, searchLimit } = params;
  const tickers: Ticker[] = [];

  for (const symbol of symbols) {
    const [base, quote] = parseMarketSymbol(symbol);
    const tickerParams: FetchTickerParams = { searchLimit };
    if (issuers[base]) tickerParams.baseIssuer = issuers[base];
    if (issuers[quote]) tickerParams.quoteIssuer = issuers[quote];
    const ticker = await this.fetchTicker(symbol, tickerParams);
    if (ticker) tickers.push(ticker);
  }

  return tickers;
}

export default fetchTickers;
