import _ from 'lodash';
import 'mocha';

import { responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchTradingFees', function () {
  beforeEach(setupLocalSDK);
  afterEach(teardownLocalSDK);

  it('should return the trading fees for all markets', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const tradingFees = await this.sellerSdk.fetchTradingFees();
    assertResultMatch(tradingFees, responses.fetchTradingFees);
  });
});
