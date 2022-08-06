import createSellOrder from './createSellOrder.json';
import fetchCurrencies from './fetchCurrencies.json';
import fetchIssuers from './fetchIssuers.json';
import fetchMarkets from './fetchMarkets.json';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';
import fetchStatus from './fetchStatus.json';
import fetchTransactionFee from './fetchTransactionFee.json';

const createOrder = {
  sell: createSellOrder,
};

const responses = {
  createOrder,
  fetchCurrencies,
  fetchIssuers,
  fetchMarkets,
  fetchOrderBook,
  fetchOrderBooks,
  fetchStatus,
  fetchTransactionFee,
};

export default responses;
