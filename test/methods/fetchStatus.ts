import 'mocha';

import { responses, rippled } from '../fixtures';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchStatus', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it("should return 'ok' if the exchange server is running", async function () {
    this.mockRippled.addResponse('server_state', () => rippled.server_state.normal);

    const status = await this.sellerSdk.fetchStatus();
    assertResultMatch(status, responses.fetchStatus);
  });
});
