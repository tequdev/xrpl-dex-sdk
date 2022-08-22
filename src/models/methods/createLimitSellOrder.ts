import { OfferCreateFlagsInterface } from 'xrpl';
import { Memo } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';
import { AccountAddress, BaseParams } from '../common';

/**
 * Request parameters for a createLimitSellOrder call
 *
 * @category Parameters
 */
export interface CreateLimitSellOrderParams extends BaseParams {
  /** Secret from which to derive the Ripple wallet making the order */
  wallet_secret?: string;
  /** The public key of the Ripple wallet making the order. */
  wallet_public_key?: string;
  /** The private key of the Ripple wallet making the order. */
  wallet_private_key?: string;
  /** Issuer for the currency being received by the order creator (if other than XRP) */
  taker_pays_issuer?: AccountAddress;
  /** Issuer for the currency being paid by the order creator (if other than XRP) */
  taker_gets_issuer?: AccountAddress;
  /** Time after which the Offer is no longer active, in seconds since the Ripple Epoch. (1/1/2000) */
  expiration?: number;
  /** Additional arbitrary information used to identify this transaction */
  memos?: Memo[];
  /** Order behavior (via XRPL OfferCreateFlags) */
  flags?: OfferCreateFlagsInterface;
}

/**
 * Expected response from a createLimitSellOrder call
 *
 * @category Responses
 */
export type CreateLimitSellOrderResponse = Order;
