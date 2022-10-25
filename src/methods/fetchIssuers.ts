import _ from 'lodash';
import { issuers as issuersData } from '../data';
import { BadRequest, FetchIssuersResponse, SDKContext, XrplNetwork } from '../models';

/**
 * Retrieves a list of trusted {@link Issuers}. Returns a {@link FetchIssuersResponse}.
 *
 * @category Methods
 *
 * @returns a {@link FetchIssuersResponse} object
 */
async function fetchIssuers(this: SDKContext): Promise<FetchIssuersResponse> {
  const issuers = issuersData[this.params.network || XrplNetwork.Mainnet];

  if (!issuers) throw new BadRequest(`No Issuers data found for network "${this.params.network}"`);

  return issuers;
}

export default fetchIssuers;
