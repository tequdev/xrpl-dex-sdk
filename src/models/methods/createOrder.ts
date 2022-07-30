import { OfferCreateFlags, Wallet } from 'xrpl';
import { Memo } from 'xrpl/dist/npm/models/common';
import { AccountAddress } from '../common';

export interface CreateOrderParams {
  /** The Ripple wallet making the order */
  wallet: Wallet;
  /** Issuer for the currency being received by the order creator (if other than XRP) */
  taker_pays_issuer?: AccountAddress;
  /** Issuer for the currency being paid by the order creator (if other than XRP) */
  taker_gets_issuer?: AccountAddress;
  /** Time after which the Offer is no longer active, in seconds since the Ripple Epoch. (1/1/2000) */
  expiration?: number;
  /** Additional arbitrary information used to identify this transaction */
  memos?: Memo[];
  /** Various options that affect how a transaction should behave */
  flags?: OfferCreateFlags.tfFillOrKill | OfferCreateFlags.tfImmediateOrCancel | OfferCreateFlags.tfPassive;
}
