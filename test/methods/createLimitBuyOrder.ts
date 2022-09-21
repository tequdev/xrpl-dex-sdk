import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { requests, responses } from '../fixtures';
import { XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('createLimitBuyOrder', function () {
  this.timeout(TIMEOUT);

  before(_.partial(setupRemoteSDK, NETWORK));
  after(teardownRemoteSDK);

  it('should create a Limit Buy Order', async function () {
    const { symbol, amount, price, params } = requests.createOrder.buy;
    const newOrder = await this.sdk.createLimitBuyOrder(symbol, amount, price, params);
    assert(typeof newOrder !== 'undefined');

    const fetchOrderResponse = await this.sdk.fetchOrder(newOrder.id);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(_.omit(fetchOrderResponse, omittedFields), _.omit(responses.createOrder.buy, omittedFields));
  });
});
