import _ from 'lodash';
import 'mocha';

import { assert } from 'chai';
import { addresses, fetchOrders } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';

const TIMEOUT = 25000;

describe('fetchOpenOrders', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should retrieve a list of Orders', async function () {
    this.mockRippled.addResponse('ledger', fetchOrders.mocks.ledger);
    this.mockRippled.addResponse('ledger_entry', fetchOrders.mocks.ledger_entry);
    this.mockRippled.addResponse('account_tx', fetchOrders.mocks.account_tx);
    this.mockRippled.addResponse('account_info', fetchOrders.mocks.account_info);

    const orders = await this.sdk.fetchOrders(
      '585245626F6F6B00000000000000000000000000+rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR/XRP',
      undefined,
      2
    );
    assert(orders.length === 2);
    assert(JSON.stringify(orders) === JSON.stringify(fetchOrders.expectedResponse));
  });
});
