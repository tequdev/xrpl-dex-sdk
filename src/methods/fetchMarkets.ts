import _ from 'lodash';
import { markets } from '../data';
import { FetchMarketsResponse, SDKContext, XrplNetwork } from '../models';

/**
 * Retrieves info for all {@link Markets} being traded on the dEX. Returns a {@link FetchMarketsResponse}.
 *
 * @category Methods
 *
 * @returns A {@link FetchMarketsResponse} object
 */
async function fetchMarkets(this: SDKContext): Promise<FetchMarketsResponse> {
  const response = markets[this.params.network || XrplNetwork.Mainnet];

  for (const market of Object.values(response)) {
    const marketData = await this.fetchMarket(market.symbol);
    if (marketData) response[market.symbol] = marketData;
  }

  return response;
}

export default fetchMarkets;
