import { assert } from 'chai';
import 'mocha';

import { xrpToDrops } from 'xrpl';
import { MarketSymbol, XrplNetwork } from '../../src/models';
import { BN, parseCurrencyCode, parseMarketSymbol } from '../../src/utils';
import { requests } from '../fixtures';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('createLimitSellOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done);
  });

  afterEach(teardownRemoteSDK);

  it('should create a Limit Sell Order', async function () {
    const { symbol, amount, price } = requests.createOrder.smallSellOrder;
    const baseValue = BN(amount);
    const quoteValue = baseValue.times(BN(price));
    const newOrder = await this.sdk.createLimitSellOrder(symbol, amount, price);
    assert(typeof newOrder !== 'undefined', 'No response from createLimitSellOrder call');

    const [_, quoteCode] = parseMarketSymbol(symbol as MarketSymbol);
    const quote = parseCurrencyCode(quoteCode);

    const tx = newOrder.info.OfferCreate.result;
    assert(tx.Account === this.sdk.wallet.classicAddress, 'Account does not match');
    // Base
    assert(tx.TakerGets === xrpToDrops(baseValue), 'TakerGets currency does not match');
    // Quote
    assert(tx.TakerPays.currency === quote.currency, 'TakerPays issuer does not match');
    assert(tx.TakerPays.issuer === quote.issuer, 'TakerPays value does not match');
    assert(BN(tx.TakerPays.value).eq(quoteValue), 'TakerPays value does not match');
  });
});
