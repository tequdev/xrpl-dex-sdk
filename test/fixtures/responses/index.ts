import createSellOrder from './createSellOrder.json';
import fetchOrder from './fetchOrder.json';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';
import fetchStatus from './fetchStatus.json';

const createOrder = {
  sell: createSellOrder,
};

const responses = {
  createOrder,
  fetchOrder,
  fetchOrderBook,
  fetchOrderBooks,
  fetchStatus,
};

export default responses;
