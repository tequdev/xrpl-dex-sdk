import { assert } from 'chai';
import 'mocha';

import { FetchOrderResponse, XrplNetwork } from '../../src/models';
import { requests } from '../fixtures';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Testnet;

describe('cancelOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done);
  });

  afterEach(teardownRemoteSDK);

  it('should create and then cancel an Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.smallBuyOrder2;
    const newOrder = await this.sdk.createOrder(symbol, side, type, amount, price, params);
    assert(typeof newOrder !== 'undefined');

    const cancelOrderResponse = await this.sdk.cancelOrder(newOrder.id);
    assert(cancelOrderResponse.id === newOrder.id);

    const canceledOrder: FetchOrderResponse = await this.sdk.fetchOrder(newOrder.id);
    assert(canceledOrder?.status === 'canceled');
  });

  // it("should throw an error if an account tries to cancel another account's Order", async function () {});
});
