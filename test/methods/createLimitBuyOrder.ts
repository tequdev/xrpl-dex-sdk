import _ from 'lodash';
import 'mocha';

import { requests, responses } from '../fixtures';
import { CreateLimitBuyOrderResponse, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 10000;
const NETWORK = XrplNetwork.Testnet;

describe('createLimitBuyOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should create a Limit Buy Order', async function () {
    const { symbol, amount, price, params } = requests.createOrder.buy;
    const newOrder = (await this.buyerSdk.createLimitBuyOrder(
      symbol,
      amount,
      price,
      params
    )) as CreateLimitBuyOrderResponse;

    const { id, datetime, timestamp, fee, info, ...expectedResponse } = responses.createOrder.buy;
    assertResultMatch(newOrder, { ...newOrder, ...expectedResponse });
  });
});
