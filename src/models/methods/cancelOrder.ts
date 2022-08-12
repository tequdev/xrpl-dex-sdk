import { BaseParams, BaseResponse, Sequence } from '../common';

/**
 * Request parameters for a cancelOrder call
 *
 * @category Parameters
 */
export interface CancelOrderParams extends BaseParams {
  /** The last ledger sequence from when this Order was created */
  last_ledger_sequence: number;
  /** The public key of the Ripple wallet that placed the Order. */
  wallet_public_key?: string;
  /** The private key of the Ripple wallet that placed the Order. */
  wallet_private_key?: string;
  /** Secret from which to derive the Ripple wallet that placed the Order */
  wallet_secret?: string;
}

/**
 * Expected response from a cancelOrder call
 *
 * @category Responses
 */
export type CancelOrderResponse = BaseResponse & { id: Sequence };
