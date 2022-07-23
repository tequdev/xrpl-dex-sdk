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
  /** Give quote currency and receive base currency; for example, buying BTC/USD means that you will receive bitcoins for your dollars. */
  Buy = 'buy',
  /** Give base currency and receive quote currency; for example, buying BTC/USD means that you will receive dollars for your bitcoins. */
  Sell = 'sell',
}
