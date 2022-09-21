import _ from 'lodash';
import { MarketSymbol, WatchTickerParams, WatchTickerResponse, SDKContext } from '../models';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link WatchTickerResponse}.
 *
 * @category Methods
 */
async function watchTicker(
  this: SDKContext,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Parameters specific to the exchange API endpoint */
  params: WatchTickerParams = {}
): Promise<WatchTickerResponse | undefined> {
  console.log(symbol);
  console.log(params);
  // Subscribe to events
  // Parse out the events

  return;
}

export default watchTicker;
