import _ from 'lodash';
import 'mocha';

import { SDKContext, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assert } from 'chai';

const NETWORK = XrplNetwork.Mainnet;

describe('fetchOrders', function () {
  this.timeout(25000);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it.only('should retrieve a list of Orders', async function () {
    const orders = await (this.sellerSdk as SDKContext).fetchOrders(undefined, undefined, 5);
    assert(orders.length === 5);
  });

  it('should retrieve a list of Orders for a given market symbol', async function () {
    const orders = await (this.sellerSdk as SDKContext).fetchOrders('XRP/USD', undefined, 5);
    assert(orders.length === 5);
  });

  it('should retrieve a list of Orders since a given date', async function () {
    // const orders = await (this.sellerSdk as SDKContext).fetchOrders('XRP/USD', undefined, 5);
    // assert(orders.length === 5);
  });
});
