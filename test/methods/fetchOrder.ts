import _ from 'lodash';
import 'mocha';

import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { addresses, fetchOrder } from '../fixtures';
import { assert } from 'chai';

const TIMEOUT = 20000;

describe('fetchOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should return an Order', async function () {
    this.mockRippled.addResponse('ledger_entry', fetchOrder.mocks.ledger_entry);
    this.mockRippled.addResponse('account_tx', fetchOrder.mocks.account_tx);
    this.mockRippled.addResponse('account_info', fetchOrder.mocks.account_info);

    const order = await this.sdk.fetchOrder(fetchOrder.request);

    assert(JSON.stringify(order) === JSON.stringify(fetchOrder.expectedResponse));
  });
});
