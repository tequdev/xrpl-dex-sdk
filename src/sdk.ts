import { BroadcastClient, Client, Wallet } from 'xrpl';
import * as methods from './methods';
import * as models from './models';
import networks from './networks';

export class SDK implements models.SDKContext {
  params: models.SDKParams;
  broadcastClient: BroadcastClient;
  client: Client;
  wallet: Wallet;
  markets?: models.Markets;
  currencies?: models.Currencies;
  issuers?: models.Issuers;
  transferRates?: models.TransferRates;

  /**
   * Cancels an {@link models.Order} on the Ripple dEX. Returns a Promise resolving to a {@link models.CancelOrderResponse}
   * with the ID of the canceled Order object.
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#canceling-orders
   *
   * @category Orders
   *
   * @param id - {@link models.OrderId} of the Order to cancel
   * @returns a Promise resolving to a {@link models.CancelOrderResponse}
   */
  cancelOrder = (id: models.OrderId) => methods.cancelOrder(this, id);

  /**
   * Places a Limit Buy {@link models.Order} on the Ripple dEX. Returns a {@link models.CreateLimitBuyOrderResponse}
   * with the newly created Order's ID.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#placing-orders
   *
   * @param symbol - {@link models.MarketSymbol} for new Order
   * @param amount - How much currency you want to trade (in units of base currency)
   * @param price - Price at which the order is to be fullfilled (in units of quote currency)
   * @param params - (Optional) A {@link models.CreateLimitBuyOrderParams} object
   * @returns A {@link models.CreateLimitBuyOrderResponse} object
   */
  createLimitBuyOrder = (
    symbol: models.MarketSymbol,
    amount: string,
    price: string,
    params?: models.CreateLimitBuyOrderParams
  ) => methods.createLimitBuyOrder(this, symbol, amount, price, params);

  /**
   * Places a Limit Sell {@link models.Order} on the Ripple dEX. Returns a {@link models.CreateLimitSellOrderResponse}
   * with the newly created Order's ID.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#placing-orders
   *
   * @param symbol - {@link models.MarketSymbol} for new Order
   * @param amount - How much currency you want to trade (in units of base currency)
   * @param price - Price at which the order is to be fullfilled (in units of quote currency)
   * @param params - (Optional) A {@link models.CreateLimitSellOrderParams} object
   * @returns A {@link models.CreateLimitSellOrderResponse} object
   */
  createLimitSellOrder = (
    symbol: models.MarketSymbol,
    amount: string,
    price: string,
    params?: models.CreateLimitSellOrderParams
  ) => methods.createLimitSellOrder(this, symbol, amount, price, params);

  /**
   * Places an {@link models.Order} on the Ripple dEX. Returns a {@link models.CreateOrderResponse} with the
   * newly created Order's ID.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#placing-orders
   *
   * @param symbol - {@link models.MarketSymbol} for new Order
   * @param side - Order direction (buy or sell)
   * @param type - Order type (only limit is supported)
   * @param amount - How much currency you want to trade (in units of base currency)
   * @param price - Price at which the order is to be fullfilled (in units of quote currency)
   * @param params - (Optional) a {@link models.CreateOrderParams} object
   * @returns A {@link models.CreateOrderResponse} object
   */
  createOrder = (
    symbol: models.MarketSymbol,
    side: models.OrderSide,
    type: models.OrderType,
    amount: string,
    price: string,
    params?: models.CreateOrderParams
  ) => methods.createOrder(this, symbol, side, type, amount, price, params);

  /**
   * Creates a Trust Line to a currency {@link models.Issuer} on the XRPL ledger. Returns a
   * {@link models.CreateTrustLineResponse} with the newly created Trust Line.
   *
   * @category Orders
   *
   * @param code - {@link models.CurrencyCode} for an issued (non-XRP) currency
   * @param amount - Max amount of sdk currency you can receive
   * @returns A {@link models.CreateTrustLineResponse} object
   */
  createTrustLine = (code: models.CurrencyCode, amount: string) => methods.createTrustLine(this, code, amount);

  /**
   * Fetches information about an account's balances, sorted by currency and funds availability.
   * Returns a {@link models.FetchBalanceResponse}.
   *
   * @category Balances
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#account-balance
   *
   * @param params - (Optional) A {@link models.FetchBalanceParams} object
   * @returns {@link models.FetchBalanceResponse}
   */
  fetchBalance = (params?: models.FetchBalanceParams) => methods.fetchBalance(this, params);

  /**
   * Fetches a list of canceled {@link models.Orders} from the dEX. Returns a {@link models.FetchCanceledOrdersResponse}
   * with any retrieved Orders.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
   *
   * @param symbol - (Optional) {@link models.MarketSymbol} to filter Orders by
   * @param since - (Optional) Only return Orders since sdk date
   * @param limit - (Optional) Total number of Orders to return (default is 20)
   * @param params - (Optional) A {@link models.FetchCanceledOrdersParams}
   * @returns {@link models.FetchCanceledOrdersResponse}
   */
  fetchCanceledOrders = (
    symbol?: models.MarketSymbol,
    since?: models.UnixTimestamp,
    limit?: number,
    params?: models.FetchCanceledOrdersParams
  ) => methods.fetchCanceledOrders(this, symbol, since, limit, params);

  /**
   * Fetches a list of closed {@link models.Orders} from the dEX. Returns a {@link models.FetchClosedOrdersResponse}
   * with any retrieved Orders.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
   *
   * @param symbol - (Optional) {@link models.MarketSymbol} to filter Orders by
   * @param since - (Optional) Only return Orders since sdk date
   * @param limit - (Optional) Total number of Orders to return (default is 20)
   * @param params - (Optional) A {@link models.FetchClosedOrdersResponse}
   * @returns {@link models.FetchClosedOrdersResponse}
   */
  fetchClosedOrders = (
    symbol?: models.MarketSymbol,
    since?: models.UnixTimestamp,
    limit?: number,
    params?: models.FetchClosedOrdersParams
  ) => methods.fetchClosedOrders(this, symbol, since, limit, params);

  /**
   * Retrieves a list of {@link models.Currencies} being traded on the dEX. Returns a {@link models.FetchCurrenciesResponse}.
   *
   * @category Currencies
   *
   * @returns A {@link models.FetchCurrenciesResponse} object
   */
  fetchCurrencies = () => methods.fetchCurrencies(this);

  /**
   * Fetches a list of open {@link models.Orders} from the dEX. Returns a {@link models.FetchOpenOrdersResponse} with
   * a list of any Orders found.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
   *
   * @param symbol - (Optional) {@link models.MarketSymbol} to filter Orders by
   * @param since - (Optional) Only return Orders since sdk date
   * @param limit - (Optional) Total number of Orders to return (default is 20)
   * @param params - (Optional) A {@link models.FetchOpenOrdersParams} object
   * @returns A {@link models.FetchOpenOrdersResponse} object
   */
  fetchOpenOrders = (
    symbol?: models.MarketSymbol,
    since?: models.UnixTimestamp,
    limit?: number,
    params?: models.FetchOpenOrdersParams
  ) => methods.fetchOpenOrders(this, symbol, since, limit, params);

  /**
   * Fetches an {@link models.Order} from the dEX. Returns a {@link models.FetchOrderResponse} with the matching Order.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
   *
   * @param id - {@link models.OrderId} of the Order to fetch
   * @param symbol - (Optional) The {@link models.MarketSymbol} of the Order to fetch
   * @param params - (Optional) A {@link models.FetchOrderParams} object
   * @returns {@link models.FetchOrderResponse}
   */
  fetchOrder = (id: models.OrderId, symbol?: models.MarketSymbol, params?: models.FetchOrderParams) =>
    methods.fetchOrder(this, id, symbol, params);

  /**
   * Retrieves order book data for a single {@link models.Market} pair. Returns a {@link models.FetchOrderBookResponse}.
   *
   * @category Order Books
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
   *
   * @param symbol - {@link models.MarketSymbol} to get order book for
   * @param limit - (Optional) Total number of entries to return (default is 20)
   * @param params - (Optional) A {@link models.FetchOrderBookParams} object
   * @returns A {@link models.FetchOrderBookResponse} object
   */
  fetchOrderBook = (symbol: models.MarketSymbol, limit?: number, params?: models.FetchOrderBookParams) =>
    methods.fetchOrderBook(this, symbol, limit, params);

  /**
   * Retrieves order book data for multiple {@link models.Market} pairs. Returns a {@link models.FetchOrderBooksResponse}.
   *
   * @category Order Books
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
   *
   * @param symbols - Array of {@link models.MarketSymbol}s to get order books for
   * @param limit - (Optional) Total number of entries to return (default is 20)
   * @param params - (Optional) A {@link models.FetchOrderBookParams} object
   * @returns A {@link models.FetchOrderBooksResponse} object
   */
  fetchOrderBooks = (symbols: models.MarketSymbol[], limit?: number, params?: models.FetchOrderBooksParams) =>
    methods.fetchOrderBooks(this, symbols, limit, params);

  /**
   * Retrieves {@link models.OrderBook} data for multiple {@link models.Market} pairs. Returns a
   * {@link models.FetchOrdersResponse} with a list of any matching Orders.
   *
   * @category Orders
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#querying-multiple-orders-and-trades
   *
   * @param symbol - (Optional) {@link models.MarketSymbol} to filter {@link models.Orders} by
   * @param since - (Optional) Only return Orders since sdk date
   * @param limit - (Optional) Total number of entries to return (default is 20)
   * @param params - (Optional) A {@link models.FetchOrdersParams} object
   * @returns A {@link models.FetchOrdersResponse} object
   */
  fetchOrders = (
    symbol?: models.MarketSymbol,
    since?: models.UnixTimestamp,
    limit?: number,
    params?: models.FetchOrdersParams
  ) => methods.fetchOrders(this, symbol, since, limit, params);

  /**
   * Retrieves a list of trusted {@link models.Issuers}. Returns a {@link models.FetchIssuersResponse}.
   *
   * @category Issuers
   *
   * @returns a {@link models.FetchIssuersResponse} object
   */
  fetchIssuers = () => methods.fetchIssuers(this);

  /**
   * Retrieves L2 order book data for a single market pair. Returns a {@link models.FetchL2OrderBookResponse}.
   *
   * @category Order Books
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
   *
   * @param symbol - {@link models.MarketSymbol} to get order book for
   * @param limit - (Optional) Total number of entries to return (default is 20)
   * @param params - (Optional) A {@link models.FetchL2OrderBookParams}
   * @returns A {@link models.FetchL2OrderBookResponse} object
   */
  fetchL2OrderBook = (symbol: models.MarketSymbol, limit?: number, params?: models.FetchL2OrderBookParams) =>
    methods.fetchL2OrderBook(this, symbol, limit, params);

  /**
   * Retrieves info for a single {@link models.Market} being traded on the dEX. Returns a
   * {@link models.FetchMarketsResponse}.
   *
   * @category Markets
   *
   * @param symbol - {@link models.MarketSymbol} of the market to get info for
   * @returns {@link models.FetchMarketsResponse} or undefined
   *
   * @throws {@link models.ArgumentsRequired}
   * Thrown if any required function arguments are missing
   *
   * @throws {@link models.BadSymbol}
   * Thrown if the provided MarketSymbol is invalid
   *
   * @throws {@link models.MarketNotFound}
   * Thrown if data about the market could not be found
   */
  fetchMarket = (symbol: models.MarketSymbol) => methods.fetchMarket(this, symbol);

  /**
   * Retrieves info for all {@link models.Markets} being traded on the dEX. Returns a {@link models.FetchMarketsResponse}.
   *
   * @category Markets
   *
   * @returns A {@link models.FetchMarketsResponse} object
   */
  fetchMarkets = () => methods.fetchMarkets(this);

  /**
   * Fetch the SDK user's {@link models.Trades} for a given market symbol. Returns a {@link models.FetchMyTradesResponse}.
   *
   * @category Trades
   *
   * @param symbol - {@link models.MarketSymbol} to filter Trades by
   * @param since - (Optional) Only return Trades since sdk date
   * @param limit - (Optional) Total number of Trades to return (default is 20)
   * @param params - (Optional) A {@link models.FetchMyTradesParams} object
   * @returns A {@link models.FetchMyTradesResponse} object
   */
  fetchMyTrades = (
    symbol: models.MarketSymbol,
    since?: models.UnixTimestamp,
    limit?: number,
    params?: models.FetchMyTradesParams
  ) => methods.fetchMyTrades(this, symbol, since, limit, params);

  /**
   * Fetches information about currency-related {@link models.Fee}s incurred for performing transactions.
   * Returns a {@link models.FetchFeesResponse}.
   *
   * @category Fees
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#fees
   *
   * @returns A {@link models.FetchFeesResponse} object
   */
  fetchFees = () => methods.fetchFees(this);

  /**
   * Fetches information regarding {@link models.ExchangeStatus} from either the info hardcoded in
   * the exchange instance or the API, if available. Returns a {@link models.FetchStatusResponse}.
   *
   * @category Exchange Status
   *
   * @returns A {@link models.FetchStatusResponse} object
   */
  fetchStatus = () => methods.fetchStatus(this);

  /**
   * Retrieves {@link models.Ticker} data for a single {@link models.Market} pair. Returns a {@link models.FetchTickerResponse}.
   *
   * @category Price Tickers
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#a-single-ticker-for-one-symbol
   *
   * @param symbol - {@link models.MarketSymbol} to get price ticker data for
   * @param params - (Optional) A {@link models.FetchTickerParams} object
   * @returns A {@link models.FetchTickerResponse} object
   */
  fetchTicker = (symbol: models.MarketSymbol, params?: models.FetchTickerParams) =>
    methods.fetchTicker(this, symbol, params);

  /**
   * Retrieves price {@link models.Ticker} data for multiple {@link models.Market} pairs. Returns a
   * {@link models.FetchTickersResponse}.
   *
   * @category Price Tickers
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#multiple-tickers-for-all-or-many-symbols
   *
   * @param symbols - Array of {@link models.MarketSymbol}s to get price ticker data for
   * @param params - (Optional) A {@link models.FetchTickersParams} object
   * @returns A {@link models.FetchTickersResponse} object
   */
  fetchTickers = (symbols: models.MarketSymbol[], params?: models.FetchTickersParams) =>
    methods.fetchTickers(this, symbols, params);

  /**
   * Fetch {@link models.Trades} for a given {@link models.MarketSymbol}. Returns a {@link models.FetchTradesResponse} with any
   * matching Trades.
   *
   * @category Trades
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#querying-multiple-orders-and-trades
   *
   * @param symbol - (Optional) {@link models.MarketSymbol} to filter Trades by
   * @param since - (Optional) Only return Trades since sdk date
   * @param limit - (Optional) Total number of Trades to return (default is 20)
   * @param params - (Optional) A {@link models.FetchTradesParams} object
   * @returns A {@link models.FetchTradesResponse} object
   */
  fetchTrades = (
    symbol: models.MarketSymbol,
    since?: models.UnixTimestamp,
    limit?: number,
    params?: models.FetchTradesParams
  ) => methods.fetchTrades(this, symbol, since, limit, params);

  /**
   * Fetches information about the fees incurred while trading on given {@link models.Market}. Returns a
   * {@link models.FetchTradingFeeResponse}.
   *
   * @category Fees
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#fees
   *
   * @param symbol - {@link models.MarketSymbol} to get trading fees for
   * @returns A {@link models.FetchTradingFeeResponse} object
   */
  fetchTradingFee = (symbol: models.MarketSymbol) => methods.fetchTradingFee(this, symbol);

  /**
   * Fetches information about the fees incurred while trading on any {@link models.Market}. Returns a
   * {@link models.FetchTradingFeesResponse}.
   *
   * @category Fees
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#fees
   *
   * @returns A {@link models.FetchTradingFeesResponse} object
   */
  fetchTradingFees = () => methods.fetchTradingFees(this);

  /**
   * Fetches information about fees incurred for performing transactions with a given {@link models.Currency}.
   * Returns a {@link models.FetchTransactionFeesResponse}.
   *
   * @category Fees
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#fees
   *
   * @param code - {@link models.CurrencyCode} to get fees for
   * @returns A {@link models.FetchTransactionFeeResponse} object
   */
  fetchTransactionFee = (code: models.CurrencyCode) => methods.fetchTransactionFee(this, code);

  /**
   * Fetches information about fees incurred for performing transactions with multiple {@link models.Currencies}.
   * Returns a {@link models.FetchTransactionFeesResponse}.
   *
   * @category Fees
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#fees
   *
   * @param codes - Array of {@link models.CurrencyCode}s to get fees for
   * @returns A {@link models.FetchTransactionFeesResponse} object
   */
  fetchTransactionFees = (codes: models.CurrencyCode[]) => methods.fetchTransactionFees(this, codes);

  /**
   * Retrieves an {@link models.Issuer}'s transfer rate (if any). Returns a {@link models.FetchTransferRateResponse}
   * with the transfer rate, or zero if the Issuer has no transfer fees.
   *
   * @category Fees
   *
   * @link https://docs.ccxt.com/en/latest/manual.html?#fees
   *
   * @param issuer - Issuer address to get data for
   * @returns A {@link models.FetchTransferRateResponse} object
   */
  fetchTransferRate = (issuer: models.IssuerAddress) => methods.fetchTransferRate(this, issuer);

  /**
   * Retrieves and caches a list of {@link models.Currencies} being traded on the dEX. Returns a Promise
   * resolving to a {@link models.LoadCurrenciesResponse}.
   *
   * @category Currencies
   *
   * @param reload - (Optional) Whether to refresh the cache
   * @returns A Promise resolving to a {@link models.LoadCurrenciesResponse} object
   */
  loadCurrencies = (reload?: boolean) => methods.loadCurrencies(this, reload);

  /**
   * Retrieves and caches a list of {@link models.Issuers} whose {@link models.Currencies} are being traded on the dEX.
   * Returns a Promise resolving to a {@link models.LoadIssuersResponse}.
   *
   * @category Issuers
   *
   * @param reload - (Optional) Whether to refresh the cache
   * @returns A Promise resolving to a {@link models.LoadIssuersResponse} object
   */
  loadIssuers = (reload?: boolean) => methods.loadIssuers(this, reload);

  /**
   * Retrieves and caches a list of {@link models.Markets} being traded on the dEX. Returns a Promise
   * resolving to a {@link models.LoadMarketsResponse}.
   *
   * @category Markets
   *
   * @param reload - (Optional) Whether to refresh the cache
   * @returns A Promise resolving to a {@link models.LoadMarketsResponse} object
   */
  loadMarkets = (reload?: boolean) => methods.loadMarkets(this, reload);

  /**
   * Listens for new {@link models.OrderBook} data for a single {@link models.Market} pair. Returns a Promise
   * resolving to a {@link models.WatchBalanceResponse}.
   *
   * @category Balances
   *
   * @param params - (Optional) A {@link models.WatchBalanceParams} object
   * @returns A Promise resolving to a {@link models.WatchBalanceResponse} object
   */
  watchBalance = (params?: models.WatchBalanceParams) => methods.watchBalance(this, params);

  /**
   * Listens for new {@link models.OrderBook} data for a single {@link models.Market} pair. Returns a Promise
   * resolving to a {@link models.WatchOrderBookResponse}.
   *
   * @category Order Books
   *
   * @param symbol - {@link models.MarketSymbol} to get order book for
   * @param limit - (Optional) Total number of entries to return (default is 20)
   * @returns A Promise resolving to a {@link models.WatchOrderBookResponse} object
   */
  watchOrderBook = (symbol: models.MarketSymbol, limit?: number) => methods.watchOrderBook(this, symbol, limit);

  /**
   * Listens for new {@link models.Orders} for a single {@link models.Market} pair. Returns a Promise
   * resolving to a {@link models.WatchOrdersResponse}.
   *
   * @category Orders
   *
   * @param symbol - (Optional) {@link models.MarketSymbol} to filter Orders by
   * @param params - (Optional) A {@link models.WatchOrdersParams} object
   * @returns A Promise resolving to a {@link models.WatchOrdersResponse} object
   */
  watchOrders = (symbol?: models.MarketSymbol, params?: models.WatchOrdersParams) =>
    methods.watchOrders(this, symbol, params);

  /**
   * Streams information regarding {@link models.ExchangeStatus} from either the info hardcoded in
   * the exchange instance or the API, if available. Returns a Promise resolving to a
   * {@link models.WatchStatusResponse}.
   *
   * @category Exchange Status
   *
   * @returns A Promise resolving to a {@link models.WatchStatusResponse} object
   */
  watchStatus = () => methods.watchStatus(this);

  /**
   * Listens for new {@link models.Ticker} data for a single {@link models.Market} pair. Returns a Promise
   * resolving to a {@link models.WatchTickerResponse}.
   *
   * @category Price Tickers
   *
   * @param symbol - {@link models.MarketSymbol} to get price ticker data for
   * @param params - (Optional) A {@link models.WatchTickerParams} object
   * @returns A Promise resolving to a {@link models.WatchTickerResponse} object
   */
  watchTicker = (symbol: models.MarketSymbol, params?: models.WatchTickerParams) =>
    methods.watchTicker(this, symbol, params);

  /**
   * Listens for new {@link models.Ticker} data for multiple {@link models.Market} pairs. Returns a Promise
   * resolving to a {@link models.WatchTickersResponse}.
   *
   * @category Price Tickers
   *
   * @param symbols - Array of {@link models.MarketSymbol}s to get price ticker data for
   * @param params - (Optional) A {@link models.WatchTickerParams} object
   * @returns A Promise resolving to a {@link models.WatchTickersResponse} object
   */
  watchTickers = (symbols: models.MarketSymbol[], params?: models.WatchTickersParams) =>
    methods.watchTickers(this, symbols, params);

  /**
   * Listens for new {@link models.Trades} for a given {@link models.Market}. Returns a Promise resolving to a
   * {@link models.WatchTradesResponse}.
   *
   * @category Trades
   *
   * @param symbol - {@link models.MarketSymbol} to filter Trades by
   * @returns A Promise resolving to a {@link models.WatchTradesResponse} object
   */
  watchTrades = (symbol: models.MarketSymbol) => methods.watchTrades(this, symbol);

  /**
   * Listens for new {@link models.Trades} from the SDK user for a given {@link models.Market} pair. Returns a Promise
   * resolving to a {@link models.WatchMyTradesResponse}.
   *
   * @category Trades
   *
   * @param symbol - {@link models.MarketSymbol} to watch
   * @returns A Promise resolving to a {@link models.WatchMyTradesResponse} object
   */
  watchMyTrades = (symbol: models.MarketSymbol) => methods.watchMyTrades(this, symbol);

  constructor(params: models.SDKParams) {
    const { network, websocketsOptions, walletPrivateKey, walletPublicKey, walletSecret } = params;

    const jsonRpcUrl = params.jsonRpcUrl ? params.jsonRpcUrl : network ? networks[network].jsonRpc : undefined;
    const websocketsUrl = params.websocketsUrl
      ? params.websocketsUrl
      : network
      ? networks[network].websockets
      : undefined;

    if (!network) {
      if (!jsonRpcUrl && !websocketsUrl) {
        throw new Error('No XRPL network URL provided! Either `jsonRpcUrl` or `websocketsUrl` must be defined');
      }
    }

    if (!walletSecret && (!walletPublicKey || !walletPrivateKey)) {
      throw new Error('Must provide either `walletSecret` or both `walletPublicKey` and `walletPrivateKey`');
    }

    this.params = params;
    this.broadcastClient = new BroadcastClient([websocketsUrl || networks.mainnet.websockets], websocketsOptions);
    this.client = new Client(websocketsUrl || networks.mainnet.websockets, websocketsOptions);
    this.wallet = walletSecret
      ? Wallet.fromSecret(walletSecret)
      : new Wallet(walletPublicKey as string, walletPrivateKey as string);
  }

  /**
   * Connects to the XRPL network.
   */
  connect = async (): Promise<void> => {
    if (this.client) await this.client.connect();
    if (this.broadcastClient) await this.broadcastClient.connect();
  };

  /**
   * Disconnects from the XRPL network.
   */
  disconnect = async (): Promise<void> => {
    if (this.client) await this.client.disconnect();
    if (this.broadcastClient) await this.broadcastClient.disconnect();
  };
}

export default SDK;
