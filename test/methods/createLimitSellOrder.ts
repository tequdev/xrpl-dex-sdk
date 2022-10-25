import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { requests } from '../fixtures';
import { MarketSymbol, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { BN, parseCurrencyCode, parseMarketSymbol } from '../../src/utils';
import { OfferCreateFlags, xrpToDrops } from 'xrpl';

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
    assert((tx.Flags & OfferCreateFlags.tfSell) === OfferCreateFlags.tfSell, 'Flags do not match');
    // Base
    assert(tx.TakerGets === xrpToDrops(baseValue), 'TakerGets currency does not match');
    // Quote
    assert(tx.TakerPays.currency === quote.currency, 'TakerPays issuer does not match');
    assert(tx.TakerPays.issuer === quote.issuer, 'TakerPays value does not match');
    assert(BN(tx.TakerPays.value).eq(quoteValue), 'TakerPays value does not match');
  });
});
