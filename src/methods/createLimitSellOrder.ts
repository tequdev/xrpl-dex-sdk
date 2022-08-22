import _ from 'lodash';
import { Client } from 'xrpl';
import { CreateLimitSellOrderParams, MarketSymbol, Order, OrderSide, OrderType } from '../models';
import createOrder from './createOrder';

/**
 * Creates a new Order on the Ripple dEX. Returns an {@link CreateLimitSellOrderResponse}
 * with the newly created Order object.
 *
 * @category Methods
 */
async function createLimitSellOrder(
  this: Client,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** How much currency you want to trade (usually, but not always) in units of the base currency) */
  amount: string,
  /** The price at which the order is to be fullfilled in units of the quote currency (ignored in market orders) */
  price: string,
  /** Parameters specific to the exchange API endpoint */
  params: CreateLimitSellOrderParams
): Promise<Order> {
  const newOrder: Order = await createOrder.call(this, symbol, OrderSide.Sell, OrderType.Limit, amount, price, params);

  return newOrder;
}

export default createLimitSellOrder;
