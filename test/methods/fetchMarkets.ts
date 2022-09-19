import _ from 'lodash';
import 'mocha';

import { responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 20000;

describe('fetchMarkets', function () {
  this.timeout(TIMEOUT);

  beforeEach(setupLocalSDK);
  afterEach(teardownLocalSDK);

  it('should return a list of market pairs on the exchange', async function () {
    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const markets = await this.sellerSdk.fetchMarkets();
    assertResultMatch(markets, responses.fetchMarkets);
  });
});
