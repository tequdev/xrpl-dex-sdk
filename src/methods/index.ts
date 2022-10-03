import cancelOrder from './cancelOrder';
import createLimitBuyOrder from './createLimitBuyOrder';
import createLimitSellOrder from './createLimitSellOrder';
import createOrder from './createOrder';
import createTrustLine from './createTrustLine';
import fetchBalance from './fetchBalance';
import fetchCanceledOrders from './fetchCanceledOrders';
import fetchClosedOrders from './fetchClosedOrders';
import fetchCurrencies from './fetchCurrencies';
import fetchFees from './fetchFees';
import fetchIssuers from './fetchIssuers';
import fetchL2OrderBook from './fetchL2OrderBook';
import fetchMarket from './fetchMarket';
import fetchMarkets from './fetchMarkets';
import fetchMyTrades from './fetchMyTrades';
import fetchOpenOrders from './fetchOpenOrders';
import fetchOrder from './fetchOrder';
import fetchOrderBook from './fetchOrderBook';
import fetchOrderBooks from './fetchOrderBooks';
import fetchOrders from './fetchOrders';
import fetchStatus from './fetchStatus';
import fetchTicker from './fetchTicker';
import fetchTickers from './fetchTickers';
import fetchTrades from './fetchTrades';
import fetchTradingFee from './fetchTradingFee';
import fetchTradingFees from './fetchTradingFees';
import fetchTransactionFee from './fetchTransactionFee';
import fetchTransactionFees from './fetchTransactionFees';
import loadCurrencies from './loadCurrencies';
import loadIssuers from './loadIssuers';
import loadMarkets from './loadMarkets';
import watchBalance from './watchBalance';
import watchMyTrades from './watchMyTrades';
import watchOrders from './watchOrders';
import watchOrderBook from './watchOrderBook';
import watchStatus from './watchStatus';
import watchTicker from './watchTicker';
import watchTickers from './watchTickers';
import watchTrades from './watchTrades';

const methods: Record<string, any> = {
  cancelOrder,
  createLimitBuyOrder,
  createLimitSellOrder,
  createOrder,
  createTrustLine,
  fetchBalance,
  fetchCanceledOrders,
  fetchClosedOrders,
  fetchCurrencies,
  fetchFees,
  fetchIssuers,
  fetchL2OrderBook,
  fetchMarket,
  fetchMarkets,
  fetchMyTrades,
  fetchOpenOrders,
  fetchOrder,
  fetchOrderBook,
  fetchOrderBooks,
  fetchOrders,
  fetchStatus,
  fetchTicker,
  fetchTickers,
  fetchTrades,
  fetchTradingFee,
  fetchTradingFees,
  fetchTransactionFee,
  fetchTransactionFees,
  loadCurrencies,
  loadIssuers,
  loadMarkets,
  watchBalance,
  watchMyTrades,
  watchOrderBook,
  watchOrders,
  watchStatus,
  watchTicker,
  watchTickers,
  watchTrades,
};

export default methods;
