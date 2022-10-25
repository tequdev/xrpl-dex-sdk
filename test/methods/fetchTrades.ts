import { assert } from 'chai';
import _ from 'lodash';
import 'mocha';
import { addresses, fetchTrades } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';

const TIMEOUT = 25000;

describe('fetchTrades', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_BUYER_SECRET }));
  afterEach(teardownLocalSDK);

  it('return a list of Trades for a given symbol', async function () {
    this.mockRippled.addResponse('account_info', fetchTrades.mocks.account_info);
    this.mockRippled.addResponse('ledger', fetchTrades.mocks.ledger);

    const trades = await this.sdk.fetchTrades(fetchTrades.request, undefined, 3);

    assert(trades.length === 3, 'Trades array should be equal to the limit value in the `fetchTrades` call');
    assert(JSON.stringify(trades) === JSON.stringify(fetchTrades.expectedResponse));
  });
});
