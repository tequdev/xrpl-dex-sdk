import _ from 'lodash';
import 'mocha';
import { SDKContext } from '../../src/models';

import { responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchFees', function () {
  beforeEach(setupLocalSDK);
  afterEach(teardownLocalSDK);

  it('should return the fee schedule for transactions and trading', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const fees = await (this.sellerSdk as SDKContext).fetchFees();
    assertResultMatch(fees?.trading, responses.fetchFees.trading);
    assertResultMatch(fees?.transactions, responses.fetchFees.transactions);
  });
});
