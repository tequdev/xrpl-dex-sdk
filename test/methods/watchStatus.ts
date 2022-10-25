import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';
import { Readable } from 'stream';

import { ExchangeStatus, XrplNetwork } from '../../src/models';
import { addresses } from '../fixtures';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 10000;
const NETWORK = XrplNetwork.Mainnet;

describe.skip('watchStatus', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, addresses.AKT_SELLER_SECRET, done);
  });

  afterEach(teardownRemoteSDK);

  it('should subscribe to exchange status updates', function (done) {
    this.sdk
      .watchStatus()
      .then((statusStream: Readable) => {
        statusStream.on('update', (status: ExchangeStatus) => {
          assert(typeof status !== 'undefined');
          done();
        });
      })
      .catch((err: Error) => {
        console.error(err);
        done(err);
      });
  });
});
