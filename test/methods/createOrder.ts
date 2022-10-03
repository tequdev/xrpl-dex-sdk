import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { requests, responses } from '../fixtures';
import { OrderSide, OrderType, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Testnet;

describe('createOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done);
  });

  afterEach(teardownRemoteSDK);

  it('should create a Buy Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.buy;
    const newOrderId = await this.sdk.createOrder(symbol, side as OrderSide, type as OrderType, amount, price, params);
    assert(typeof newOrderId !== 'undefined');

    const fetchOrderResponse = await this.sdk.fetchOrder(newOrderId);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(_.omit(fetchOrderResponse, omittedFields), _.omit(responses.createOrder.buy, omittedFields));
  });

  it('should create a Sell Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.smallSellOrder;
    const newOrderId = await this.sdk.createOrder(symbol, side as OrderSide, type as OrderType, amount, price, params);
    assert(typeof newOrderId !== 'undefined');

    const fetchOrderResponse = await this.sdk.fetchOrder(newOrderId);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(
      _.omit(fetchOrderResponse, omittedFields),
      _.omit(responses.createOrder.new.sell.small, omittedFields)
    );
  });
});
