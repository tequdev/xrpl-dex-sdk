import { Client } from 'xrpl';
import { ExchangeStatusType, FetchStatusRequest, FetchStatusResponse } from '../models';

async function fetchStatus(this: Client, { params }: FetchStatusRequest): Promise<FetchStatusResponse> {
  const serverState = (
    await this.request({
      command: 'server_state',
      ...params,
    })
  ).result.state;

  let status: ExchangeStatusType = 'ok';

  if (serverState.server_state === 'disconnected') status = 'shutdown';

  const response: FetchStatusResponse = {
    status,
    updated: Date.parse(serverState.time),
    eta: '',
    url: '',
  };

  return response;
}

export default fetchStatus;
