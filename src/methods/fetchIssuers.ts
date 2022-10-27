import _ from 'lodash';
import { issuers as issuersData } from '../data';
import { BadRequest, FetchIssuersResponse, XrplNetwork } from '../models';
import SDK from '../sdk';

/**
 * Retrieves a list of trusted {@link models.Issuers}. Returns a {@link models.FetchIssuersResponse}.
 *
 * @category Methods
 *
 * @returns {@link models.FetchIssuersResponse}
 */
async function fetchIssuers(sdk: SDK): Promise<FetchIssuersResponse> {
  const issuers = issuersData[sdk.params.network || XrplNetwork.Mainnet];

  if (!issuers) throw new BadRequest(`No Issuers data found for network "${sdk.params.network}"`);

  return issuers;
}

export default fetchIssuers;
