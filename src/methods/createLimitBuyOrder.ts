import _ from 'lodash';
import {
  ArgumentsRequired,
  CreateLimitBuyOrderParams,
  CreateLimitBuyOrderResponse,
  MarketSymbol,
  SDKContext,
} from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Places a Limit Buy {@link Order} on the Ripple dEX. Returns a {@link CreateLimitBuyOrderResponse}
 * with the newly created Order's ID.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#placing-orders
 *
 * @param symbol - {@link MarketSymbol} for new Order
 * @param amount - How much currency you want to trade (in units of base currency)
 * @param price - Price at which the order is to be fullfilled (in units of quote currency)
 * @param params - (Optional) A {@link CreateLimitBuyOrderParams} object
 * @returns A {@link CreateLimitBuyOrderResponse} object
 */
async function createLimitBuyOrder(
  this: SDKContext,
  symbol: MarketSymbol,
  amount: string,
  price: string,
  params: CreateLimitBuyOrderParams = {}
): Promise<CreateLimitBuyOrderResponse> {
  if (!symbol || !amount || !price || !params)
    throw new ArgumentsRequired('Missing required arguments for createLimitBuyOrder call');
  validateMarketSymbol(symbol);

  const newOrder = await this.createOrder(symbol, 'buy', 'limit', amount, price, params);

  return newOrder;
}

export default createLimitBuyOrder;
