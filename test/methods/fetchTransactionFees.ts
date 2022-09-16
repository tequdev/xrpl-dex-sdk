import _ from 'lodash';
import 'mocha';

import { responses, rippled } from '../fixtures';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchTransactionFees', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return the transaction fees for multiple currencies', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const transactionFees = await this.sellerSdk.fetchTransactionFees(['USD', 'GBP']);
    assertResultMatch(transactionFees, responses.fetchTransactionFees);
  });
});
