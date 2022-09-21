import { OfferCreateFlagsInterface } from 'xrpl';
import { Memo } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';
import { AccountAddress, BaseParams } from '../common';

/**
 * Request parameters for a createOrder call
 *
 * @category Parameters
 */
export interface CreateOrderParams extends BaseParams {
  /** Base currency issuer (if other than XRP) */
  baseCurrencyIssuer?: AccountAddress;
  /** Quote currency issuer (if other than XRP) */
  quoteCurrencyIssuer?: AccountAddress;
  /** [DEPRECATED] Issuer for the currency being received by the order creator (if other than XRP) */
  taker_pays_issuer?: AccountAddress;
  /** [DEPRECATED] Issuer for the currency being paid by the order creator (if other than XRP) */
  taker_gets_issuer?: AccountAddress;
  /** Time after which the Offer is no longer active, in seconds since the Ripple Epoch. (1/1/2000) */
  expiration?: number;
  /** Additional arbitrary information used to identify this transaction */
  memos?: Memo[];
  /** Order behavior (via XRPL OfferCreateFlags) */
  flags?: OfferCreateFlagsInterface;
}

/**
 * Expected response from a createOrder call
 *
 * @category Responses
 */
export type CreateOrderResponse = Order;
