import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { MarketSymbol, XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { OfferCreateFlags, xrpToDrops } from 'xrpl';
import { requests } from '../fixtures';
import { BN, parseCurrencyCode, parseMarketSymbol } from '../../src/utils';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Testnet;

describe('createOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done);
  });

  afterEach(teardownRemoteSDK);

  it('should create a Buy Order', async function () {
    const { symbol, side, type, amount, price } = requests.createOrder.smallBuyOrder;
    const baseValue = BN(amount);
    const quoteValue = baseValue.times(BN(price));
    const newOrder = await this.sdk.createOrder(symbol, side, type, amount, price);
    assert(typeof newOrder !== 'undefined', 'No response from createOrder call');

    const [baseCode] = parseMarketSymbol(symbol as MarketSymbol);
    const base = parseCurrencyCode(baseCode);

    const tx = newOrder.info.OfferCreate.result;
    assert(tx.Account === this.sdk.wallet.classicAddress, 'Account does not match');
    assert((tx.Flags & OfferCreateFlags.tfSell) === 0, 'Flags do not match');
    // Base
    assert(tx.TakerPays.currency === base.currency, 'TakerPays currency does not match');
    assert(tx.TakerPays.issuer === base.issuer, 'TakerPays issuer does not match');
    assert(BN(tx.TakerPays.value).eq(baseValue), 'TakerPays value does not match');
    // Quote
    assert(tx.TakerGets === xrpToDrops(quoteValue), 'TakerGets value does not match');
  });

  it('should create a Sell Order', async function () {
    const { symbol, side, type, amount, price } = requests.createOrder.smallSellOrder;
    const baseValue = BN(amount);
    const quoteValue = baseValue.times(BN(price));
    const newOrder = await this.sdk.createOrder(symbol, side, type, amount, price);
    assert(typeof newOrder !== 'undefined', 'No response from createOrder call');

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
