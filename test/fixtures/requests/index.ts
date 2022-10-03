import cancelOrder from './cancelOrder.json';
import * as createOrder from './createOrder';
import createBuyOrder from './createBuyOrder.json';
import createSellOrder from './createSellOrder.json';
import fetchBalance from './fetchBalance.json';
import fetchOrder from './fetchOrder';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';
import * as v2 from './v2';

const requests = {
  cancelOrder,
  createOrder: {
    ...createOrder,
    buy: createBuyOrder,
    sell: createSellOrder,
  },
  fetchBalance,
  fetchOrder,
  fetchOrderBook,
  fetchOrderBooks,
  v2,
};

export default requests;
