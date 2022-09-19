import { SDKContext, FetchTradingFeeResponse, MarketSymbol } from '../models';

/**
 * Returns information about the fees incurred while trading on given market.
 * Returns a {@link FetchTradingFeeResponse}.
 *
 * @category Methods
 */
async function fetchTradingFee(
  this: SDKContext,
  /** Unified Market Symbol to look up */
  symbol: MarketSymbol
): Promise<FetchTradingFeeResponse | undefined> {
  const markets = await this.fetchMarkets();

  // TODO: put proper error handling here
  if (!markets || !markets[symbol]) return;

  const { baseFee, baseIssuer, quoteFee, quoteIssuer } = markets[symbol];

  const response: FetchTradingFeeResponse = {
    symbol,
    base: baseFee?.toString() || '0',
    quote: quoteFee?.toString() || '0',
    percentage: true,
    info: JSON.stringify({ market: markets[symbol] }),
  };

  if (baseIssuer) response.baseIssuer = baseIssuer;
  if (quoteIssuer) response.quoteIssuer = quoteIssuer;

  return response;
}

export default fetchTradingFee;
