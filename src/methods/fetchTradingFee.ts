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
): Promise<FetchTradingFeeResponse> {
  const market = await this.fetchMarket(symbol);

  // TODO: put proper error handling here
  if (!market) return;

  const { baseFee, quoteFee } = market;

  return {
    symbol,
    base: baseFee || '0',
    quote: quoteFee || '0',
    percentage: true,
    info: { market },
  };
}

export default fetchTradingFee;
