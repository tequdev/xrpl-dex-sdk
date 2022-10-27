import { OrderId } from '../ccxt';
import { ResponseInfo } from '../common';

/**
 * Expected response from a {@link SDK.cancelOrder} call.
 *
 * @category Responses
 */
export interface CancelOrderResponse {
  id: OrderId;
  info: ResponseInfo;
}
