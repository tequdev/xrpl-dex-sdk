import _ from 'lodash';
import { markets } from '../data';
import { FetchMarketsResponse, XrplNetwork } from '../models';
import SDK from '../sdk';

/**
 * Retrieves info for all {@link models.Markets} being traded on the dEX. Returns a {@link models.FetchMarketsResponse}.
 *
 * @category Methods
 *
 * @returns {@link models.FetchMarketsResponse}
 */
async function fetchMarkets(sdk: SDK): Promise<FetchMarketsResponse> {
  const response = markets[sdk.params.network || XrplNetwork.Mainnet];

  for (const market of Object.values(response)) {
    const marketData = await sdk.fetchMarket(market.symbol);
    if (marketData) response[market.symbol] = marketData;
  }

  return response;
}

export default fetchMarkets;
