import { BadRequest } from 'ccxt';
import _ from 'lodash';
import { OfferCancel, Wallet } from 'xrpl';
import { AccountSequencePair, CancelOrderParams, CancelOrderResponse, SDKContext } from '../models';
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
  id: AccountSequencePair,
  /** Exchange-specific parameters */
  params: CancelOrderParams
): Promise<CancelOrderResponse | undefined> {
  const { wallet_private_key, wallet_public_key, wallet_secret } = params;

  const { sequence } = parseOrderId(id);

  if (!wallet_secret && (!wallet_public_key || !wallet_private_key)) {
    throw new BadRequest('Must provide either `wallet_secret` or `wallet_public_key` and `wallet_private_key`');
  }

  const wallet = wallet_secret
    ? Wallet.fromSecret(wallet_secret)
    : new Wallet(wallet_public_key as string, wallet_private_key as string);

  const offerCancel: OfferCancel = {
    TransactionType: 'OfferCancel',
    Account: wallet.classicAddress,
    OfferSequence: sequence,
  };

  const offerCancelResult = await this.client.submitAndWait(offerCancel, { autofill: true, wallet });

  const response: CancelOrderResponse = {
    id,
    info: { OfferCancel: offerCancelResult },
  };

  return response;
}

export default cancelOrder;
