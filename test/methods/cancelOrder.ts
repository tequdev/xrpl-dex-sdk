import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { requests } from '../fixtures';
import { CreateOrderResponse, OrderSide, OrderType, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('cancelOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should create and then cancel an Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.buy;
    const newOrder = (await this.buyerSdk.createOrder(
      symbol,
      side as OrderSide,
      type as OrderType,
      amount,
      price,
      params
    )) as CreateOrderResponse;

    const canceledOrder = await this.buyerSdk.cancelOrder(newOrder.id, { wallet_secret: params.wallet_secret });

    assert(canceledOrder.id === newOrder.id);
  });
});
