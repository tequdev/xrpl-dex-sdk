import _ from 'lodash';
import { ArgumentsRequired, CreateLimitSellOrderParams, CreateLimitSellOrderResponse, MarketSymbol } from '../models';
import SDK from '../sdk';
import { validateMarketSymbol } from '../utils';

/**
 * Places a Limit Sell {@link models.Order} on the Ripple dEX. Returns a {@link models.CreateLimitSellOrderResponse}
 * with the newly created Order's ID.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#placing-orders
 *
 * @param symbol - {@link models.MarketSymbol} for new Order
 * @param amount - How much currency you want to trade (in units of base currency)
 * @param price - Price at which the order is to be fullfilled (in units of quote currency)
 * @param params - (Optional) A {@link models.CreateLimitSellOrderParams} object
 * @returns {@link models.CreateLimitSellOrderResponse}
 */
async function createLimitSellOrder(
  sdk: SDK,
  symbol: MarketSymbol,
  amount: string,
  price: string,
  params: CreateLimitSellOrderParams = {}
): Promise<CreateLimitSellOrderResponse> {
  if (!symbol || !amount || !price || !params)
    throw new ArgumentsRequired('Missing required arguments for createLimitSellOrder call');
  validateMarketSymbol(symbol);

  const newOrder = await sdk.createOrder(symbol, 'sell', 'limit', amount, price, params);

  return newOrder;
}

export default createLimitSellOrder;
