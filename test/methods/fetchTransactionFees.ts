import _ from 'lodash';
import 'mocha';

import { addresses, responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchTransactionFees', function () {
  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should return the transaction fees for multiple currencies', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const transactionFees = await this.sdk.fetchTransactionFees([
      'USD+rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
      'GBP+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
    ]);
    assertResultMatch(transactionFees, responses.fetchTransactionFees);
  });
});
