import _ from 'lodash';
import { Client } from 'xrpl';
import { issuers } from '../data';
import { Issuers, FetchIssuersResponse } from '../models';

/**
 * Retrieves a list of trusted issuers
 * a {@link FetchIssuersResponse}.
 *
 * @category Methods
 */
async function fetchIssuers(this: Client): Promise<FetchIssuersResponse> {
  return issuers as Issuers;
}

export default fetchIssuers;
