import { assert } from 'chai';
import _ from 'lodash';
import 'mocha';
import SDK from '../../src';
import { Ticker, TickerStream, XrplNetwork } from '../../src/models';
import { addresses, rippled } from '../fixtures';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Mainnet;

describe.skip('watchTickers', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, addresses.AKT_BUYER_SECRET, done);
  });

  afterEach(teardownRemoteSDK);

  it('should subscribe to Ticker data for a list of symbols', function (done) {
    const tickers = ['USD+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B/XRP', 'XRP/USD+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B'];

    this.sdk
      .watchTickers(tickers)
      .then((tickersStream: TickerStream) => {
        tickersStream.on('update', (newTicker: Ticker) => {
          assert(typeof newTicker !== 'undefined');
          done();
          tickersStream.removeAllListeners();
        });

        tickersStream.on('error', (error) => {
          console.error(error);
          done(error);
          tickersStream.removeAllListeners();
        });

        (this.sdk as SDK).client.emit(
          'transaction',
          rippled.v2.subscribe.offerCreate['rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151']
        );
      })
      .catch((err: Error) => {
        console.error(err);
        done(err);
      });
  });
});
