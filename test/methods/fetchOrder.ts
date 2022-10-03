import _ from 'lodash';
import 'mocha';

import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { OrderId } from '../../src/models';
import { assertResultMatch } from '../testUtils';
import { addresses, requests, responses, rippled } from '../fixtures';

const TIMEOUT = 20000;

describe('fetchOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  /**
   * Buy Orders
   */
  it('should return an open Buy Order', async function () {
    const orderId = requests.v2.orders.USD.buy.open as OrderId;
    this.mockRippled.addResponse('ledger_entry', rippled.v2.ledgerEntry.offers.open[orderId]);
    this.mockRippled.addResponse('tx', rippled.v2.tx.orderId.OfferCreate[orderId]);
    this.mockRippled.addResponse('account_info', rippled.v2.accountInfo.issuers.USD);

    const fetchOrderResponse = await this.sdk.fetchOrder(orderId);
    assertResultMatch(fetchOrderResponse, responses.v2.orders.USD.buy.open);
  });

  // it('should return a closed Buy Order', async function () {});

  // it('should return a partially filled Buy Order with multiple Trades', async function () {});

  // it('should retrieve a completed Buy order with a Trade', async function () {});

  // it('should return a canceled Buy Order', async function () {});

  // it('should return a "Fill or Kill" Buy Order', async function () {});

  // it('should return an "Immediate or Cancel" Buy Order', async function () {});

  /**
   * Sell Orders
   */

  // it('should return a partially filled Sell Order with multiple Trades', async function () {});

  // it('should retrieve a completed Sell order with multiple Trades', async function () {});

  // it('should return a completed Sell Order', async function () {});

  // it('should return a canceled Sell Order', async function () {});

  // it('should return a "Fill or Kill" Sell Order', async function () {});

  // it('should return an "Immediate or Cancel" Sell Order', async function () {});
});
