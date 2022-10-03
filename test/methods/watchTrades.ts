import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { Trade, TradeStream, XrplNetwork } from '../../src/models';
import { addresses, rippled } from '../fixtures';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import SDK from '../../src';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('watchTrades', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, addresses.AKT_BUYER_SECRET, done);
  });

  afterEach(teardownRemoteSDK);

  it('should subscribe to new Trades for a given market symbol', function (done) {
    const symbol = 'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc';

    this.sdk
      .watchTrades(symbol)
      .then((tradeStream: TradeStream) => {
        tradeStream.on('update', (newTrade: Trade) => {
          assert(newTrade.symbol === symbol);
          done();
          tradeStream.removeAllListeners();
        });

        tradeStream.on('error', (error) => {
          console.error(error);
          done(error);
          tradeStream.removeAllListeners();
        });

        (this.sdk as SDK).client.emit(
          'transaction',
          rippled.v2.subscribe.offerCreate['rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P:416442']
        );
      })
      .catch((err: Error) => {
        console.error(err);
        done(err);
      });
  });
});
