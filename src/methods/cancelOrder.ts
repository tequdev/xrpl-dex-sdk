import { BadRequest } from 'ccxt';
import _ from 'lodash';
import {
  Client,
  // OfferCancel,
  Wallet,
} from 'xrpl';
import { CancelOrderParams, CancelOrderResponse } from '../models';
import { stringToInt } from '../utils';

/**
 * Cancels an Order on the Ripple dEX. Returns an {@link CancelOrderResponse}
 * with the canceled Order object.
 *
 * @category Methods
 */
async function cancelOrder(
  this: Client,
  /** ID of the Order to cancel */
  id: string,
  /** Exchange-specific parameters */
  params: CancelOrderParams
): Promise<CancelOrderResponse | undefined> {
  const {
    //   last_ledger_sequence,
    wallet_private_key,
    wallet_public_key,
    wallet_secret,
  } = params;

  const sequence = stringToInt(id);

  if (!sequence) {
    throw new BadRequest('ID must be an integer string');
  }

  if (!wallet_secret && (!wallet_public_key || !wallet_private_key)) {
    throw new BadRequest('Must provide either `wallet_secret` or `wallet_public_key` and `wallet_private_key`');
  }

  const wallet = wallet_secret
    ? Wallet.fromSecret(wallet_secret)
    : new Wallet(wallet_public_key as string, wallet_private_key as string);

  const offerCancelTxn: any = {
    TransactionType: 'OfferCancel',
    Account: wallet.classicAddress,
    OfferSequence: 30228805,
    LastLedgerSequence: 30228884,
  };

  //   const offerCancelTxn: OfferCancel = {
  //     TransactionType: 'OfferCancel',
  //     Account: wallet.classicAddress,
  //     OfferSequence: sequence,
  //     LastLedgerSequence: last_ledger_sequence,
  //   };

  const offerCancelTxnFilled = await this.autofill(offerCancelTxn);

  const offerCancelTxnSigned = wallet.sign(offerCancelTxnFilled);

  console.log(offerCancelTxnSigned.tx_blob);

  const offerCancelResult = await this.submitAndWait(offerCancelTxnSigned.tx_blob);

  console.log(offerCancelResult);

  const response: CancelOrderResponse = {
    id,
    info: JSON.stringify({ OfferCancel: offerCancelResult }),
  };

  return response;
}

export default cancelOrder;
