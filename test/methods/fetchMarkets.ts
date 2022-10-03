import _ from 'lodash';
import 'mocha';

import { addresses, responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 20000;

describe('fetchMarkets', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should return a list of market pairs on the exchange', async function () {
    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const markets = await this.sdk.fetchMarkets();
    assertResultMatch(markets, responses.fetchMarkets);
  });
});
