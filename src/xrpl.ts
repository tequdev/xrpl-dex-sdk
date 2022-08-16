import { Exchange } from 'ccxt';
import { Wallet } from 'xrpl';
import { methods } from '.';

const REQUEST_TIMEOUT = 10000;
const DECIMAL_PLACES = 7;

class xrpl extends Exchange {
  describe() {
    return this.deepExtend(super.describe(), {
      id: 'xrpl',
      name: 'XRPL Ledger',
      countries: ['US'],
      version: 'v1',

      // TODO: find out what the actual rate limit is for Ripple
      rateLimit: 10,

      //   certified: false,
      pro: false,
      has: {
        CORS: true,
        spot: false,
        margin: false,
        swap: false,
        future: false,
        option: false,
        addMargin: false,
        cancelAllOrders: false,
        cancelOrder: true,
        cancelOrders: false,
        createDepositAddress: false,
        createLimitBuyOrder: true,
        createLimitSellOrder: true,
        createMarketBuyOrder: true,
        createMarketSellOrder: true,
        createOrder: true,
        createPostOnlyOrder: false,
        createReduceOnlyOrder: false,
        createStopOrder: false,
        createStopLimitOrder: false,
        createStopMarketOrder: false,
        editOrder: false,
        fetchAccounts: false,
        fetchBalance: true,
        fetchBidsAsks: false,
        fetchBorrowInterest: false,
        fetchBorrowRate: false,
        fetchBorrowRateHistory: false,
        fetchBorrowRatesPerSymbol: false,
        fetchBorrowRates: false,
        fetchCanceledOrders: false,
        fetchClosedOrder: false,
        fetchClosedOrders: false,
        fetchCurrencies: true,
        fetchDeposit: true,
        fetchDepositAddress: false,
        fetchDepositAddresses: false,
        fetchDepositAddressesByNetwork: false,
        fetchDeposits: true,
        fetchFees: true,
        fetchTransactionFee: true,
        fetchTransactionFees: true,
        fetchFundingHistory: false,
        fetchFundingRate: false,
        fetchFundingRateHistory: false,
        fetchFundingRates: false,
        fetchIndexOHLCV: false,
        fetchL2OrderBook: true,
        fetchLedger: false,
        fetchLedgerEntry: false,
        fetchLeverageTiers: false,
        fetchMarketLeverageTiers: false,
        fetchMarkets: true,
        fetchMarkOHLCV: false,
        fetchMyTrades: true,
        fetchOHLCV: false,
        fetchOpenOrder: false,
        fetchOpenOrders: false,
        fetchOrder: true,
        fetchOrderBook: true,
        fetchOrderBooks: true,
        fetchOrders: true,
        fetchOrderTrades: false,
        fetchPermissions: false,
        fetchPosition: false,
        fetchPositions: false,
        fetchPositionsRisk: false,
        fetchPremiumIndexOHLCV: false,
        fetchStatus: true,
        fetchTicker: true,
        fetchTickers: false,
        fetchTime: false,
        fetchTrades: true,
        fetchTradingFee: true,
        fetchTradingFees: true,
        fetchTradingLimits: false,
        fetchTransactions: true,
        fetchTransfers: false,
        fetchWithdrawal: true,
        fetchWithdrawals: true,
        reduceMargin: false,
        setLeverage: false,
        setMargin: false,
        setMarginMode: false,
        setPositionMode: false,
        signIn: false,
        transfer: false,
        withdraw: false,
        loadMarkets: true,
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
      requiredCredentials: {
        publicKey: true,
        privateKey: true,
        secret: true,
      },
      fees: {
        tierBased: false,
        percentage: false,
      },
      precisionMode: DECIMAL_PLACES,
      options: {},
    });
  }

  constructor(userConfig = {}) {
    super(userConfig);

    Object.assign(this, methods);

    // Settings
    this.quoteJsonNumbers = true; // treat numbers in JSON as quoted precise strings
    this.number = String;
    this.options = {};

    // Requests
    this.headers = {};
    this.origin = '*';
    this.timeout = REQUEST_TIMEOUT;

    // Credentials
    this.publicKey = undefined;
    this.privateKey = undefined;
    this.secret = '';

    // Cached data
    this.markets = {};
    this.currencies = {};
    this.issuers = {};
    this.balance = {};
    this.orderbooks = {};
    this.tickers = {};
    this.orders = {};
    this.trades = {};
    this.transactions = {};
    this.myTrades = {};

    // Create wallet
    if (!!this.secret) {
      this.wallet = Wallet.fromSecret(this.secret);
    } else if (this.publicKey && this.privateKey) {
      this.wallet = new Wallet(this.publicKey, this.privateKey);
    }
  }
}

export default xrpl;
