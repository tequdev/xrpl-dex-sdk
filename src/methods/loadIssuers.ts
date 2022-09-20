import _ from 'lodash';
import { LoadIssuersResponse, SDKContext } from '../models';
import fetchIssuers from './fetchIssuers';

/**
 * Retrieves and caches a list of issuers being traded on the dEX.
 * Returns a {@link LoadIssuersResponse}.
 *
 * @category Methods
 */
async function loadIssuers(this: SDKContext, reload = false): Promise<LoadIssuersResponse | undefined> {
  if (!this.issuers || reload) {
    const issuers = await fetchIssuers.call(this);
    this.issuers = issuers;
  }
  return this.issuers;
}

export default loadIssuers;
