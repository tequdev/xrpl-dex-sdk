import cancelOrder from './cancelOrder.json';
import createBuyOrder from './createBuyOrder.json';
import createSellOrder from './createSellOrder.json';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';

const createOrder = {
  buy: createBuyOrder,
  sell: createSellOrder,
};

const requests = {
  cancelOrder,
  createOrder,
  fetchOrderBook,
  fetchOrderBooks,
};

export default requests;
