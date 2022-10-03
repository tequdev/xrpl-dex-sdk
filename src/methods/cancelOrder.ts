import _ from 'lodash';
import { OfferCancel } from 'xrpl';
import { OrderId, CancelOrderResponse, SDKContext } from '../models';
import { parseOrderId } from '../utils';

/**
 * Cancels an Order on the Ripple dEX. Returns an {@link CancelOrderResponse}
 * with the canceled Order object.
 *
 * @category Methods
 */
async function cancelOrder(
  this: SDKContext,
  /** ID of the Order to cancel */
  id: OrderId
): Promise<CancelOrderResponse> {
  const { sequence } = parseOrderId(id);

  const offerCancel: OfferCancel = {
    TransactionType: 'OfferCancel',
    Account: this.wallet.classicAddress,
    OfferSequence: sequence,
  };

  const offerCancelResult = await this.client.submitAndWait(offerCancel, { autofill: true, wallet: this.wallet });

  const response: CancelOrderResponse = {
    id,
    info: { OfferCancel: offerCancelResult },
  };

  return response;
}

export default cancelOrder;
