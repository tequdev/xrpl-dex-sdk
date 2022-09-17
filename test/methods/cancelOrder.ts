import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { requests } from '../fixtures';
import { OrderSide, OrderType, SDKContext } from '../../src/models';
import { XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('cancelOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should create and then cancel an Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.smallBuyOrder;
    const newOrder = await (this.buyerSdk as SDKContext).createOrder(
      symbol,
      side as OrderSide,
      type as OrderType,
      amount,
      price,
      params
    );
    assert(typeof newOrder !== 'undefined');

    const canceledOrder = await this.buyerSdk.cancelOrder(newOrder.id);
    assert(canceledOrder.id === newOrder.id);
  });
});
