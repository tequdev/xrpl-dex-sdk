import _ from 'lodash';
import { Readable } from 'stream';
import { LedgerStream, SubscribeRequest } from 'xrpl';
import SDK from '../sdk';
import { WatchStatusResponse } from '../models';

/**
 * Streams information regarding {@link models.ExchangeStatus} from either the info hardcoded in
 * the exchange instance or the API, if available. Returns a Promise resolving to a
 * {@link models.WatchStatusResponse}.
 *
 * @category Methods
 *
 * @returns {@link models.WatchStatusResponse}
 */
async function watchStatus(sdk: SDK): Promise<WatchStatusResponse> {
  const statusStream = new Readable({ read: () => sdk });

  await sdk.client.request({
    command: 'subscribe',
    streams: ['ledger'],
  } as SubscribeRequest);

  sdk.client.on('ledgerClosed', async (ledger: LedgerStream) => {
    const newStatus = await sdk.fetchStatus();
    if (newStatus) statusStream.emit('update', newStatus);
  });

  return statusStream;
}

export default watchStatus;
