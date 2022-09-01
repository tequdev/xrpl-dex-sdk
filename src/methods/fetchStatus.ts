import { Client } from 'xrpl';
import { ExchangeStatusType, FetchStatusResponse } from '../models';

/**
 * Returns information regarding {@link ExchangeStatus} from either the info
 * hardcoded in the exchange instance or the API, if available. Returns an
 * {@link FetchStatusResponse}.
 *
 * @category Methods
 */
async function fetchStatus(this: Client): Promise<FetchStatusResponse> {
  const serverStateResponse = await this.request({
    command: 'server_state',
  });

  const serverState = serverStateResponse.result.state;

  let status: ExchangeStatusType = 'ok';

  if (serverState.server_state === 'disconnected') status = 'shutdown';

  const response: FetchStatusResponse = {
    status,
    updated: Date.parse(serverState.time),
    eta: '',
    url: '',
    info: { server_state: serverState },
  };

  return response;
}

export default fetchStatus;
