import { assert } from 'chai';
import _ from 'lodash';
import 'mocha';
import { XrplNetwork } from '../../src/models';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Testnet;

const keys = {
  seller: {
    public: 'ED8B9B26AE09C875052726030E10AFDD27DDCFA89BBFB57237A3AC1FE72F0911F1',
    private: 'ED09BB3144BA3662646FFBDD7B26729AFE31DB3342A8ACA0ED6533C9D89A7AD1C1',
  },
  buyer: {
    public: 'EDF2C353010B331C31EA4954E0E104A31C7CAB44A5691028AE7CCE543EF847D0BD',
    private: 'ED220C912F13AEFEC7DDB253A1AF1CFE267F4C5B2259ED404A455C43955AA5F490',
  },
};

describe('fetchTrades', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, undefined, done, keys.seller.public, keys.seller.private);
  });

  afterEach(teardownRemoteSDK);

  it('return a list of Trades for a given symbol', async function () {
    const trades = await this.sdk.fetchMyTrades('AKT+rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B/XRP', undefined, 1, {
      searchLimit: 500,
    });

    assert(trades.length);
  });
});
