import cancelOrder from './cancelOrder';
import createLimitBuyOrder from './createLimitBuyOrder';
import createLimitSellOrder from './createLimitSellOrder';
import createOrder from './createOrder';
import fetchBalance from './fetchBalance';
import fetchCanceledOrders from './fetchCanceledOrders';
import fetchClosedOrders from './fetchClosedOrders';
import fetchCurrencies from './fetchCurrencies';
import fetchFees from './fetchFees';
import fetchIssuers from './fetchIssuers';
import fetchMarket from './fetchMarket';
import fetchMarkets from './fetchMarkets';
import fetchOpenOrders from './fetchOpenOrders';
import fetchOrder from './fetchOrder';
import fetchOrderBook from './fetchOrderBook';
import fetchOrderBooks from './fetchOrderBooks';
import fetchOrders from './fetchOrders';
import fetchStatus from './fetchStatus';
import fetchTicker from './fetchTicker';
import fetchTickers from './fetchTickers';
import fetchTradingFee from './fetchTradingFee';
import fetchTradingFees from './fetchTradingFees';
import fetchTransactionFee from './fetchTransactionFee';
import fetchTransactionFees from './fetchTransactionFees';
import loadCurrencies from './loadCurrencies';
import loadIssuers from './loadIssuers';
import loadMarkets from './loadMarkets';

const methods: Record<string, any> = {
  cancelOrder,
  createLimitBuyOrder,
  createLimitSellOrder,
  createOrder,
  fetchBalance,
  fetchCanceledOrders,
  fetchClosedOrders,
  fetchCurrencies,
  fetchFees,
  fetchIssuers,
  fetchMarket,
  fetchMarkets,
  fetchOpenOrders,
  fetchOrder,
  fetchOrderBook,
  fetchOrderBooks,
  fetchOrders,
  fetchStatus,
  fetchTicker,
  fetchTickers,
  fetchTradingFee,
  fetchTradingFees,
  fetchTransactionFee,
  fetchTransactionFees,
  loadCurrencies,
  loadIssuers,
  loadMarkets,
};

export default methods;
