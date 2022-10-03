import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { requests } from '../fixtures';
import { OrderSide, OrderType } from '../../src/models';
import { XrplNetwork } from '../../src/models';
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
    const newOrderId = await this.sdk.createOrder(symbol, side as OrderSide, type as OrderType, amount, price, params);
    assert(typeof newOrderId !== 'undefined');

    const canceledOrder = await this.sdk.cancelOrder(newOrderId);
    assert(canceledOrder.id === newOrderId);
  });

  it("should throw an error if an account tries to cancel another account's Order", async function () {});
});
