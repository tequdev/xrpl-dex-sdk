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

describe('createLimitBuyOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done);
  });

  afterEach(teardownRemoteSDK);

  it('should create a Limit Buy Order', async function () {
    const { symbol, amount, price } = requests.createOrder.smallBuyOrder;
    const baseValue = BN(amount);
    const quoteValue = baseValue.times(BN(price));
    const newOrder = await this.sdk.createLimitBuyOrder(symbol, amount, price);
    assert(typeof newOrder !== 'undefined', 'No response from createLimitBuyOrder call');

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
});
