import _ from 'lodash';
import 'mocha';

import { XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assert } from 'chai';
import { addresses } from '../fixtures';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Testnet;

describe('fetchOpenOrders', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done, addresses.seller.public, addresses.seller.private);
  });

  afterEach(teardownRemoteSDK);

  it('should retrieve a list of Open Orders', async function () {
    const orders = await this.sdk.fetchOpenOrders(undefined, undefined, 1);
    assert(orders.length === 1);
    for (const order of orders) {
      assert(order.status === 'open');
    }
  });
});
