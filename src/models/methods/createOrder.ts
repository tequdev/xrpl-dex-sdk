import { Order } from 'ccxt';
import { OfferCreateFlags, Wallet } from 'xrpl';
import { Memo } from 'xrpl/dist/npm/models/common';
import { OrderSide, OrderType } from '../ccxt';
import { AccountAddress, MarketSymbol } from '../common';

export interface CreateOrderParams {
  /** The Ripple wallet making the order */
  wallet: Wallet;
  /** Issuer for the currency being received by the order creator (if other than XRP) */
  takerPaysIssuer?: AccountAddress;
  /** Issuer for the currency being paid by the order creator (if other than XRP) */
  takerGetsIssuer?: AccountAddress;
  /** Time after which the Offer is no longer active, in seconds since the Ripple Epoch. (1/1/2000) */
  expiration?: number;
  /** Additional arbitrary information used to identify this transaction */
  memos?: Memo[];
  /** Various options that affect how a transaction should behave */
  flags?: OfferCreateFlags.tfFillOrKill | OfferCreateFlags.tfImmediateOrCancel | OfferCreateFlags.tfPassive;
}

/**
 * Creates a new Offer on the Ripple ledger. Returns a
 * {@link CreateOrderResponse}.
 *
 * @category Requests
 */
export interface CreateOrderRequest {
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol;
  /** Order direction (buy or sell) */
  side: OrderSide;
  /** Order type (limit or market) */
  type: OrderType;
  /** How much currency you want to trade (usually, but not always) in units of the base currency) */
  amount: string;
  /** The price at which the order is to be fullfilled in units of the quote currency (ignored in market orders) */
  price: string;
  /** Parameters specific to the exchange API endpoint */
  params: CreateOrderParams;
}

/**
 * Expected response from a {@link CreateOrderRequest}.
 *
 * @category Responses
 */
export type CreateOrderResponse = Order;
