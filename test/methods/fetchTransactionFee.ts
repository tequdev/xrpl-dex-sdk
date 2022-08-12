import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchTransactionFee } from '../../src/methods';
import { setupClient, teardownClient } from '../setupUnitTest';
import { assertResultMatch } from '../testUtils';

describe('fetchTransactionFee', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return the transaction fee for a single currency', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const response = await fetchTransactionFee.call(this.client, 'USD');

    assertResultMatch(response, responses.fetchTransactionFee);
  });
});
