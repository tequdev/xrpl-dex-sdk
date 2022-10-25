/**
 * CCXT Orders
 *
 * https://docs.ccxt.com/en/latest/manual.html?#orders
 */
import { AccountAddress, MarketSymbol, Sequence, UnixTimestamp, XrplTimestamp } from '../common';
import { Fee, Trade } from '.';
import { Readable } from 'stream';
import { Amount } from 'xrpl/dist/npm/models/common';
import BigNumber from 'bignumber.js';

export type OrderStream = Readable;

export type OrderId = `${AccountAddress}:${Sequence}`;

export type OrderStatus = 'open' | 'closed' | 'canceled' | 'expired' | 'rejected';

export type OrderType = 'limit';

export type OrderTimeInForce = 'GTC' | 'IOC' | 'FOK' | 'PO';

export type OrderSide = 'buy' | 'sell';

/**
 * Order
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-structure
 */
export interface Order {
  id: OrderId;
  /** The XRPL ledger hash of the related Offer */
  clientOrderId?: string;
  datetime: string;
  timestamp: UnixTimestamp;
  lastTradeTimestamp?: UnixTimestamp;
  status: OrderStatus;
  symbol: MarketSymbol;
  type: OrderType;
  timeInForce?: OrderTimeInForce;
  side: OrderSide;
  amount: string;
  price: string;
  average?: string;
  filled: string;
  remaining: string;
  cost: string;
  trades: Trade[];
  fee?: Fee;
  /** Raw XRPL responses as JSON strings */
  info: Record<string, any>;
}

/**
 * Data used to assemble Order objects.
 */
export interface OrderSourceData {
  date: XrplTimestamp;
  filled: BigNumber;
  fillPrice: BigNumber;
  totalFillPrice: BigNumber;
  trades: Trade[];
  status: OrderStatus;
  Flags: number;
  Account: AccountAddress;
  Sequence: number;
  TakerPays: Amount;
  TakerGets: Amount;
}
