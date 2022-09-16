import _ from 'lodash';
import 'mocha';

import { requests, responses } from '../fixtures';
import { CreateOrderResponse, OrderSide, OrderType, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 10000;
const NETWORK = XrplNetwork.Testnet;

describe('createOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should create a Buy Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.buy;
    const newOrder = (await this.buyerSdk.createOrder(
      symbol,
      side as OrderSide,
      type as OrderType,
      amount,
      price,
      params
    )) as CreateOrderResponse;

    const { id, datetime, timestamp, fee, info, ...expectedResponse } = responses.createOrder.buy;
    assertResultMatch(newOrder, { ...newOrder, ...expectedResponse });
  });
});
