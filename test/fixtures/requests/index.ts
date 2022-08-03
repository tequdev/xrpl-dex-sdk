import createSellOrder from './createSellOrder.json';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';

const createOrder = {
  sell: createSellOrder,
};

const requests = {
  createOrder,
  fetchOrderBook,
  fetchOrderBooks,
};

export default requests;
