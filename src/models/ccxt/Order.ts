import { MarketSymbol } from '../common';
import { Fee, Trade } from '.';

export enum OrderStatus {
  Open = 'open',
  Closed = 'closed',
  Canceled = 'canceled',
  Expired = 'expired',
  Rejected = 'rejected',
}

export enum OrderType {
  Limit = 'limit',
  Market = 'market',
}

export enum OrderTimeInForce {
  GoodTillCanceled = 'gtc',
  ImmediateOrCancel = 'ioc',
  FillOrKill = 'fok',
  PostOnly = 'po',
}

export enum OrderSide {
  Buy = 'buy',
  Sell = 'sell',
}

export default interface Order {
  /** The Offer's Sequence number (as a string) */
  id: string;
  clientOrderId?: string;
  datetime: string;
  timestamp: number;
  lastTradeTimestamp: number;
  status: OrderStatus;
  symbol: MarketSymbol;
  type: string;
  timeInForce?: string;
  side: OrderSide;
  amount: string | number;
  price?: string | number; // May be empty for Market orders
  average?: string | number;
  filled: string | number;
  remaining: string | number;
  cost: string | number;
  trades: Trade[];
  fee?: Fee;
  /** Raw XRPL responses as JSON strings */
  info: any;
}
