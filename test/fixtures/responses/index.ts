import createSellOrder from './createSellOrder.json';
import fetchCurrencies from './fetchCurrencies.json';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';
import fetchStatus from './fetchStatus.json';

const createOrder = {
  sell: createSellOrder,
};

const responses = {
  createOrder,
  fetchCurrencies,
  fetchOrderBook,
  fetchOrderBooks,
  fetchStatus,
};

export default responses;
