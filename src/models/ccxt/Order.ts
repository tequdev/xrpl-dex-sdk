import { Amount, MarketSymbol } from '../common';
import Fee from './Fee';

export enum OrderStatus {
  Open = 'open',
  Closed = 'closed',
  Canceled = 'canceled',
  Expired = 'expired',
  Rejected = 'rejected',
}

export enum OrderType {
  Limit = 'limit',
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
  id: string;
  clientOrderId?: string;
  datetime: string;
  timestamp: number;
  lastTradeTimestamp?: number;
  status: OrderStatus;
  symbol: MarketSymbol;
  type: OrderType;
  timeInForce?: OrderTimeInForce;
  side: OrderSide;
  price: number;
  average: number;
  amount: Amount;
  filled: Amount;
  remaining: Amount;
  cost: number;
  fee?: Fee;
  info: { [key: string]: any };
}
