import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { addresses, requests, responses } from '../fixtures';
import { OrderSide, OrderType, SDKContext, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('createOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should create a Buy Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.buy;
    const newOrder = await (this.buyerSdk as SDKContext).createOrder(
      symbol,
      side as OrderSide,
      type as OrderType,
      amount,
      price,
      params
    );
    assert(typeof newOrder !== 'undefined');

    const fetchOrderResponse = await this.buyerSdk.fetchOrder(newOrder.id);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(_.omit(fetchOrderResponse, omittedFields), _.omit(responses.createOrder.buy, omittedFields));
  });

  it('should create a Sell Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.smallSellOrder;
    const newOrder = await (this.sellerSdk as SDKContext).createOrder(
      symbol,
      side as OrderSide,
      type as OrderType,
      amount,
      price,
      {
        ...params,
        wallet_secret: addresses.AKT_SELLER_SECRET,
      }
    );
    assert(typeof newOrder !== 'undefined');

    const fetchOrderResponse = await this.sellerSdk.fetchOrder(newOrder.id);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(
      _.omit(fetchOrderResponse, omittedFields),
      _.omit(responses.createOrder.new.sell.small, omittedFields)
    );
  });
});
