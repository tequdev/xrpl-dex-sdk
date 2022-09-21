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

  before(_.partial(setupRemoteSDK, NETWORK));
  after(teardownRemoteSDK);

  it('should create a Limit Sell Order', async function () {
    const { symbol, amount, price, params } = requests.createOrder.smallSellOrder;
    const newOrder = await this.sdk.createLimitSellOrder(symbol, amount, price, params);
    assert(typeof newOrder !== 'undefined');

    const fetchOrderResponse = await this.sdk.fetchOrder(newOrder.id);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(
      _.omit(fetchOrderResponse, omittedFields),
      _.omit(responses.createOrder.new.sell.small, omittedFields)
    );
  });
});
