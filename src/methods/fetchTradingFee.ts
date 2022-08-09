import { Client } from 'xrpl';
import { FetchTradingFeeResponse, MarketSymbol } from '../models';
import fetchMarkets from './fetchMarkets';

/**
 * Returns information about the fees incurred while trading on given market.
 * Returns a {@link FetchTradingFeeResponse}.
 *
 * @category Methods
 */
async function fetchTradingFee(
  this: Client,
  /** Unified Market Symbol to look up */
  symbol: MarketSymbol
): Promise<FetchTradingFeeResponse | undefined> {
  const markets = await fetchMarkets.call(this);

  // TODO: put proper error handling here
  if (!markets[symbol]) return;

  const { baseFee, baseIssuer, quoteFee, quoteIssuer } = markets[symbol];

  const response: FetchTradingFeeResponse = {
    symbol,
    base: baseFee || 0,
    quote: quoteFee || 0,
    percentage: true,
    info: JSON.stringify({ market: markets[symbol] }),
  };

  if (baseIssuer) response.baseIssuer = baseIssuer;
  if (quoteIssuer) response.quoteIssuer = quoteIssuer;

  return response;
}

export default fetchTradingFee;
