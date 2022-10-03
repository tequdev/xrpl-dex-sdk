import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { requests, responses } from '../fixtures';
import { XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('createLimitSellOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done);
  });

  afterEach(teardownRemoteSDK);

  it('should create a Limit Sell Order', async function () {
    const { symbol, amount, price, params } = requests.createOrder.smallSellOrder;
    const newOrderId = await this.sdk.createLimitSellOrder(symbol, amount, price, params);
    assert(typeof newOrderId !== 'undefined');

    const fetchOrderResponse = await this.sdk.fetchOrder(newOrderId);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(
      _.omit(fetchOrderResponse, omittedFields),
      _.omit(responses.createOrder.new.sell.small, omittedFields)
    );
  });
});
