import createSellOrder from './createSellOrder.json';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';
import fetchStatus from './fetchStatus.json';

const createOrder = {
  sell: createSellOrder,
};

const requests = {
  createOrder,
  fetchOrderBook,
  fetchOrderBooks,
  fetchStatus,
};

export default requests;
