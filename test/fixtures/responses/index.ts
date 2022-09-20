import cancelOrder from './cancelOrder.json';
import createBuyOrder from './createBuyOrder.json';
import createSellOrder from './createSellOrder.json';
import newCreateOrder from './createOrder';
import fetchBalance from './fetchBalance.json';
import fetchCurrencies from './fetchCurrencies.json';
import fetchFees from './fetchFees.json';
import fetchIssuers from './fetchIssuers.json';
import fetchMarkets from './fetchMarkets.json';
import fetchOrder, { tstBuy } from './fetchOrder';
import fetchOrderBook from './fetchOrderBook.json';
import fetchOrderBooks from './fetchOrderBooks.json';
import fetchStatus from './fetchStatus.json';
import fetchTradingFee from './fetchTradingFee.json';
import fetchTradingFees from './fetchTradingFees.json';
import fetchTransactionFee from './fetchTransactionFee.json';
import fetchTransactionFees from './fetchTransactionFees.json';

const createOrder = {
  buy: createBuyOrder,
  sell: createSellOrder,
  new: newCreateOrder,
};

const responses = {
  cancelOrder,
  createOrder,
  fetchBalance,
  fetchCurrencies,
  fetchFees,
  fetchIssuers,
  fetchMarkets,
  fetchOrder: {
    ...fetchOrder,
    tstBuy,
  },
  fetchOrderBook,
  fetchOrderBooks,
  fetchStatus,
  fetchTradingFee,
  fetchTradingFees,
  fetchTransactionFee,
  fetchTransactionFees,
};

export default responses;
