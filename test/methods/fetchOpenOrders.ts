import _ from 'lodash';
import 'mocha';

import { SDKContext, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assert } from 'chai';

const NETWORK = XrplNetwork.Testnet;

const TIMEOUT = 25000;

describe('fetchOpenOrders', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should retrieve a list of Open Orders', async function () {
    const orders = await (this.sellerSdk as SDKContext).fetchOpenOrders(undefined, undefined, 5);
    assert(orders.length === 5);
    for (const order of orders) {
      assert(order.status === 'open');
    }
  });
});
