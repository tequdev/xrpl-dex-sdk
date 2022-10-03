import { AccountAddress, MarketSymbol, Sequence, UnixTimestamp } from '../common';
import { Fee, Trade } from '.';
import { Readable } from 'stream';

export type OrderStream = Readable;

export type OrderId = `${AccountAddress}:${Sequence}`;

export type OrderStatus = 'open' | 'closed' | 'canceled' | 'expired' | 'rejected';

export type OrderType = 'limit';

export type OrderTimeInForce = 'GTC' | 'IOC' | 'FOK' | 'PO';

export type OrderSide = 'buy' | 'sell';

export interface Order {
  id: OrderId;
  /** The XRPL ledger hash of the related Offer */
  clientOrderId?: string;
  datetime: string;
  timestamp: UnixTimestamp;
  lastTradeTimestamp: UnixTimestamp;
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
