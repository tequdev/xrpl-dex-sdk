import cancelOrder from './cancelOrder.json';
import createBuyOrder from './createBuyOrder.json';
import createSellOrder from './createSellOrder.json';
import fetchBalance from './fetchBalance.json';
import { buyOrderRequest, sellOrderRequest, testnetBuyRequest1 } from './fetchOrder';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';

const createOrder = {
  buy: createBuyOrder,
  sell: createSellOrder,
};

const fetchOrder = {
  buy: buyOrderRequest,
  sell: sellOrderRequest,
  testnetBuy1: testnetBuyRequest1,
};

const requests = {
  cancelOrder,
  createOrder,
  fetchBalance,
  fetchOrder,
  fetchOrderBook,
  fetchOrderBooks,
};

export default requests;
