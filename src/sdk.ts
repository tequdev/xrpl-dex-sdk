import { BroadcastClient, Client, Wallet } from 'xrpl';
import * as methods from './methods';
import { Currencies, Markets, Issuers, SDKContext, SDKParams, TransferRates } from './models';
import networks from './networks';

export class SDK implements SDKContext {
  params: SDKParams;
  broadcastClient: BroadcastClient;
  client: Client;
  wallet: Wallet;
  markets?: Markets;
  currencies?: Currencies;
  issuers?: Issuers;
  transferRates?: TransferRates;

  /** Orders */
  cancelOrder = methods.cancelOrder.bind(this) as typeof methods.cancelOrder;
  createLimitBuyOrder = methods.createLimitBuyOrder.bind(this) as typeof methods.createLimitBuyOrder;
  createLimitSellOrder = methods.createLimitSellOrder.bind(this) as typeof methods.createLimitSellOrder;
  createOrder = methods.createOrder.bind(this) as typeof methods.createOrder;
  fetchOrder = methods.fetchOrder.bind(this) as typeof methods.fetchOrder;
  fetchOrders = methods.fetchOrders.bind(this) as typeof methods.fetchOrders;
  fetchOpenOrders = methods.fetchOpenOrders.bind(this) as typeof methods.fetchOpenOrders;
  fetchClosedOrders = methods.fetchClosedOrders.bind(this) as typeof methods.fetchClosedOrders;
  fetchCanceledOrders = methods.fetchCanceledOrders.bind(this) as typeof methods.fetchCanceledOrders;

  /** Trades */
  fetchTrades = methods.fetchTrades.bind(this) as typeof methods.fetchTrades;
  fetchMyTrades = methods.fetchMyTrades.bind(this) as typeof methods.fetchMyTrades;

  /** Order Book */
  fetchOrderBook = methods.fetchOrderBook.bind(this) as typeof methods.fetchOrderBook;
  fetchOrderBooks = methods.fetchOrderBooks.bind(this) as typeof methods.fetchOrderBooks;
  fetchL2OrderBook = methods.fetchL2OrderBook.bind(this) as typeof methods.fetchL2OrderBook;
  fetchTicker = methods.fetchTicker.bind(this) as typeof methods.fetchTicker;
  fetchTickers = methods.fetchTickers.bind(this) as typeof methods.fetchTickers;

  /** Metadata */
  fetchBalance = methods.fetchBalance.bind(this) as typeof methods.fetchBalance;
  fetchCurrencies = methods.fetchCurrencies.bind(this) as typeof methods.fetchCurrencies;
  fetchIssuers = methods.fetchIssuers.bind(this) as typeof methods.fetchIssuers;
  fetchMarket = methods.fetchMarket.bind(this) as typeof methods.fetchMarket;
  fetchMarkets = methods.fetchMarkets.bind(this) as typeof methods.fetchMarkets;
  fetchStatus = methods.fetchStatus.bind(this) as typeof methods.fetchStatus;
  loadCurrencies = methods.loadCurrencies.bind(this) as typeof methods.loadCurrencies;
  loadIssuers = methods.loadIssuers.bind(this) as typeof methods.loadIssuers;
  loadMarkets = methods.loadMarkets.bind(this) as typeof methods.loadMarkets;

  /** Fees */
  fetchFees = methods.fetchFees.bind(this) as typeof methods.fetchFees;
  fetchTradingFee = methods.fetchTradingFee.bind(this) as typeof methods.fetchTradingFee;
  fetchTradingFees = methods.fetchTradingFees.bind(this) as typeof methods.fetchTradingFees;
  fetchTransactionFee = methods.fetchTransactionFee.bind(this) as typeof methods.fetchTransactionFee;
  fetchTransactionFees = methods.fetchTransactionFees.bind(this) as typeof methods.fetchTransactionFees;
  fetchTransferRate = methods.fetchTransferRate.bind(this) as typeof methods.fetchTransferRate;

  /** Streaming */
  watchBalance = methods.watchBalance.bind(this) as typeof methods.watchBalance;
  watchOrderBook = methods.watchOrderBook.bind(this) as typeof methods.watchOrderBook;
  watchOrders = methods.watchOrders.bind(this) as typeof methods.watchOrders;
  watchStatus = methods.watchStatus.bind(this) as typeof methods.watchStatus;
  watchTicker = methods.watchTicker.bind(this) as typeof methods.watchTicker;
  watchTickers = methods.watchTickers.bind(this) as typeof methods.watchTickers;
  watchTrades = methods.watchTrades.bind(this) as typeof methods.watchTrades;

  constructor(params: SDKParams) {
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

  connect = async () => await this.client.connect();

  disconnect = async () => await this.client.disconnect();

  removeListener = (eventName: string, listener: any) => this.client.removeListener(eventName, listener);

  removeAllListeners = () => this.client.removeAllListeners();
}

export default SDK;
