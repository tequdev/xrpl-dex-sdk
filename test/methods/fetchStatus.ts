import _ from 'lodash';
import 'mocha';

import { responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchStatus', function () {
  beforeEach(setupLocalSDK);
  afterEach(teardownLocalSDK);

  it("should return 'ok' if the exchange server is running", async function () {
    this.mockRippled.addResponse('server_state', () => rippled.server_state.normal);

    const status = await this.sellerSdk.fetchStatus();
    assertResultMatch(status, responses.fetchStatus);
  });
});
