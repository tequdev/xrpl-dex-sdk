import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';
import { Ticker, TickerStream, XrplNetwork } from '../../src/models';
import { addresses, rippled } from '../fixtures';

import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Mainnet;

describe('watchTicker', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, addresses.AKT_BUYER_SECRET, done);
  });

  afterEach(teardownRemoteSDK);

  it('should subscribe to Ticker data for the given symbol', function (done) {
    this.sdk
      .watchTicker('XRP/USD+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B')
      .then((tickerStream: TickerStream) => {
        tickerStream.on('update', (ticker: Ticker) => {
          assert(typeof ticker !== 'undefined');
          done();
        });

        tickerStream.on('error', (error) => {
          console.error(error);
          done(error);
          tickerStream.removeAllListeners();
        });

        this.sdk.client.emit(
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
