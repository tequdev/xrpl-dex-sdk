import _ from 'lodash';
import { issuers } from '../data';
import { FetchIssuersResponse, SDKContext, XrplNetwork } from '../models';

/**
 * Retrieves a list of trusted issuers
 * a {@link FetchIssuersResponse}.
 *
 * @category Methods
 */
async function fetchIssuers(this: SDKContext): Promise<FetchIssuersResponse> {
  return this.issuers || issuers[this.params.network || XrplNetwork.Mainnet];
}

export default fetchIssuers;
