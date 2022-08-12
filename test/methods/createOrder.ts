import _ from 'lodash';
import 'mocha';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { createOrder } from '../../src/methods';
import { Order, OrderSide, OrderType } from '../../src/models';
import { setupClient, teardownClient } from '../setupUnitTest';
import { assertResultMatch } from '../testUtils';

describe('createOrder', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should create a Sell Order', async function () {
    this.mockRippled.addResponse('account_info', rippled.account_info.normal);
    this.mockRippled.addResponse('server_info', rippled.server_info.normal);
    this.mockRippled.addResponse('ledger', rippled.ledger.normal);
    this.mockRippled.addResponse('submit', rippled.offer_create.sell);
    this.mockRippled.addResponse('tx', rippled.offer_create.sell);

    const { symbol, side, type, amount, price, params } = requests.createOrder.sell;

    const response: Order = await createOrder.call(
      this.client,
      symbol,
      side as OrderSide,
      type as OrderType,
      amount,
      price,
      params
    );

    assertResultMatch(response, responses.createOrder.sell);
  });
});
