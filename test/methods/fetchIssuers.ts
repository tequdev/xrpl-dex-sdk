import _ from 'lodash';
import 'mocha';

import { addresses, responses } from '../fixtures';
import { XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Mainnet;

describe('fetchIssuers', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK, addresses.AKT_BUYER_SECRET));
  afterEach(teardownRemoteSDK);

  it('should return a list of trusted issuers on the exchange', async function () {
    const issuers = await this.sdk.fetchIssuers();
    assertResultMatch(issuers, responses.fetchIssuers[NETWORK]);
  });
});
