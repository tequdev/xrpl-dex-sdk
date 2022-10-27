import { FetchTradingFeeResponse, MarketSymbol, ArgumentsRequired } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Fetches information about the fees incurred while trading on given {@link models.Market}. Returns a
 * {@link models.FetchTradingFeeResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @param symbol - {@link models.MarketSymbol} to get trading fees for
 * @returns {@link models.FetchTradingFeeResponse}
 */
async function fetchTradingFee(
  sdk: SDK,
  /** Unified Market Symbol to look up */
  symbol: MarketSymbol
): Promise<FetchTradingFeeResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for fetchTradingFee call');
  validateMarketSymbol(symbol);

  const market = await sdk.fetchMarket(symbol);

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
