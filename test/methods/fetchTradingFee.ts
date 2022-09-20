import _ from 'lodash';
import 'mocha';

import { responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchTradingFee', function () {
  beforeEach(setupLocalSDK);
  afterEach(teardownLocalSDK);

  it('should return the trading fee for a single market', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const tradingFee = await this.sellerSdk.fetchTradingFee('XRP/USD');
    assertResultMatch(tradingFee, responses.fetchTradingFee);
  });
});
