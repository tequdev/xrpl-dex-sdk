import { Exchange } from 'ccxt';

const DECIMAL_PLACES = 7;

class ripple extends Exchange {
  describe() {
    return this.deepExtend(super.describe(), {
      id: 'ripple',
      name: 'Ripple',
      countries: ['US'],
      version: '',

      // TODO: find out what the actual rate limit is for Ripple
      rateLimit: undefined,

      //   certified: undefined,
      pro: false,
      has: {
        CORS: true,
        fetchMarkets: true,
        fetchCurrencies: true,
        loadMarkets: true,
        fetchOrderBook: true,
        fetchOrderBooks: true,
        fetchStatus: true,
        fetchL2OrderBook: true,
        fetchTrades: true,
        fetchTicker: true,
        fetchBalance: true,
        createOrder: true,
        createLimitBuyOrder: true,
        createLimitSellOrder: true,
        createMarketBuyOrder: true,
        createMarketSellOrder: true,
        cancelOrder: true,
        fetchOrder: true,
        fetchOrders: true,
        fetchOpenOrders: undefined,
        fetchCanceledOrders: undefined,
        fetchClosedOrders: undefined,
        fetchMyTrades: true,
        fetchOHLCV: false,
        fetchTransactions: true,
        fetchDeposit: true,
        fetchDeposits: true,
        fetchWithdrawal: true,
        fetchWithdrawals: true,
        fetchFees: true,
        fetchTradingFee: true,
        fetchTradingFees: true,
        fetchTransactionFee: true,
        fetchTransactionFees: true,
      },
      urls: {
        logo: 'https://xrpl.org/assets/img/XRPLedger_DevPortal-white.svg',
        api: {
          public: 'https://xrplcluster.com/',
          mirrors: ['https://s1.ripple.com:51234/', 'https://s2.ripple.com:51234/'],
        },
        test: {
          public: 'https://s.altnet.rippletest.net:51234/',
          dev: 'https://s.devnet.rippletest.net:51234/',
        },
        www: 'https://xrpl.org/',
        doc: ['https://xrpl.org/decentralized-exchange.html', 'https://xrpl.org/docs.html'],
        fees: '',
        faucet: 'https://xrpl.org/xrp-testnet-faucet.html',
      },
      fees: {
        tierBased: true,
        percentage: false,
        tiers: {
          taker: [[undefined, undefined]],
          maker: [[undefined, undefined]],
        },
      },
      precisionMode: DECIMAL_PLACES,
      options: {},
    });
  }
}

export default ripple;
