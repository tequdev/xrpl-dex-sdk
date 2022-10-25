import { assert } from 'chai';
import _ from 'lodash';
import 'mocha';
import { addresses, fetchMyTrades } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';

const TIMEOUT = 25000;

describe('fetchMyTrades', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_BUYER_SECRET }));
  afterEach(teardownLocalSDK);

  it("return a list of an account's Trades for a given symbol", async function () {
    this.mockRippled.addResponse('account_info', fetchMyTrades.mocks.account_info);
    this.mockRippled.addResponse('account_tx', fetchMyTrades.mocks.account_tx);

    const trades = await this.sdk.fetchMyTrades(fetchMyTrades.request, undefined, undefined, {
      searchLimit: 20,
    });

    assert(trades.length, 'Trades array should not be empty');
    assert(JSON.stringify(trades) === JSON.stringify(fetchMyTrades.expectedResponse));
  });
});
