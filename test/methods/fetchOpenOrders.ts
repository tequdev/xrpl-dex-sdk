import _ from 'lodash';
import 'mocha';

import { XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assert } from 'chai';
import { addresses } from '../fixtures';

const NETWORK = XrplNetwork.Testnet;

const TIMEOUT = 25000;

describe('fetchOpenOrders', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK, addresses.AKT_SELLER_SECRET));
  afterEach(teardownRemoteSDK);

  it('should retrieve a list of Open Orders', async function () {
    const orders = await this.sdk.fetchOpenOrders(undefined, undefined, 2);
    assert(orders.length === 2);
    for (const order of orders) {
      assert(order.status === 'open');
    }
  });
});
