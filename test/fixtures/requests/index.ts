import cancelOrder from './cancelOrder.json';
import createSellOrder from './createSellOrder.json';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';

const createOrder = {
  sell: createSellOrder,
};

const requests = {
  cancelOrder,
  createOrder,
  fetchOrderBook,
  fetchOrderBooks,
};

export default requests;
