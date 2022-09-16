import _ from 'lodash';
import 'mocha';

import { requests, responses } from '../fixtures';
import { CreateLimitSellOrderResponse, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 10000;
const NETWORK = XrplNetwork.Testnet;

describe('createLimitSellOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should create a Limit Sell Order', async function () {
    const { symbol, amount, price, params } = requests.createOrder.sell;
    const newOrder = (await this.sellerSdk.createLimitSellOrder(
      symbol,
      amount,
      price,
      params
    )) as CreateLimitSellOrderResponse;

    const { id, datetime, timestamp, fee, info, status, ...expectedResponse } = responses.createOrder.sell;
    assertResultMatch(newOrder, { ...newOrder, ...expectedResponse });
  });
});
