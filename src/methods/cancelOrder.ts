import _ from 'lodash';
import { OfferCancel } from 'xrpl';
import { OrderId, CancelOrderResponse, ArgumentsRequired } from '../models';
import SDK from '../sdk';
import { parseOrderId, validateOrderId } from '../utils';

/**
 * Cancels an {@link models.Order} on the Ripple dEX. Returns a Promise resolving to a {@link models.CancelOrderResponse}
 * with the ID of the canceled Order object.
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#canceling-orders
 *
 * @category Methods
 *
 * @param id - ID of the Order to cancel
 * @returns {@link models.CancelOrderResponse}
 */
async function cancelOrder(sdk: SDK, id: OrderId): Promise<CancelOrderResponse> {
  if (!id) throw new ArgumentsRequired('Missing required arguments for cancelOrder call');

  validateOrderId(id);

  const { sequence } = parseOrderId(id);

  const offerCancel: OfferCancel = {
    TransactionType: 'OfferCancel',
    Account: sdk.wallet.classicAddress,
    OfferSequence: sequence,
  };

  const offerCancelResult = await sdk.client.submitAndWait(offerCancel, { autofill: true, wallet: sdk.wallet });

  const response: CancelOrderResponse = {
    id,
    info: { OfferCancel: offerCancelResult },
  };

  return response;
}

export default cancelOrder;
