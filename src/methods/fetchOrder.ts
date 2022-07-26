import { Client } from 'xrpl';
import { FetchOrderRequest, FetchOrderResponse } from '../models';

async function fetchOrder(this: Client, { params }: FetchOrderRequest): Promise<FetchOrderResponse> {
  const response: FetchOrderResponse = {};

  return response;
}

export default fetchOrder;
