import { BroadcastClient, Client, Wallet } from 'xrpl';
import methods from './methods';
import { Currencies, Markets, Issuers, SDKContext, SDKParams } from './models';
import networks from './networks';

export class SDK implements SDKContext {
  params: SDKParams;
  broadcastClient: BroadcastClient;
  client: Client;
  wallet: Wallet;
  markets?: Markets;
  currencies?: Currencies;
  issuers?: Issuers;

  /** Orders */
  cancelOrder = methods.cancelOrder.bind(this);
  createLimitBuyOrder = methods.createLimitBuyOrder.bind(this);
  createLimitSellOrder = methods.createLimitSellOrder.bind(this);
  createOrder = methods.createOrder.bind(this);
  fetchOrder = methods.fetchOrder.bind(this);
  fetchOrders = methods.fetchOrders.bind(this);
  fetchOpenOrders = methods.fetchOpenOrders.bind(this);
  fetchClosedOrders = methods.fetchClosedOrders.bind(this);
  fetchCanceledOrders = methods.fetchCanceledOrders.bind(this);

  /** Trades */
  fetchTrades = methods.fetchTrades.bind(this);
  fetchMyTrades = methods.fetchMyTrades.bind(this);

  /** Order Book */
  fetchOrderBook = methods.fetchOrderBook.bind(this);
  fetchOrderBooks = methods.fetchOrderBooks.bind(this);
  fetchL2OrderBook = methods.fetchL2OrderBook.bind(this);
  fetchTicker = methods.fetchTicker.bind(this);
  fetchTickers = methods.fetchTickers.bind(this);

  /** Metadata */
  fetchBalance = methods.fetchBalance.bind(this);
  fetchCurrencies = methods.fetchCurrencies.bind(this);
  fetchIssuers = methods.fetchIssuers.bind(this);
  fetchMarket = methods.fetchMarket.bind(this);
  fetchMarkets = methods.fetchMarkets.bind(this);
  fetchStatus = methods.fetchStatus.bind(this);
  loadCurrencies = methods.loadCurrencies.bind(this);
  loadIssuers = methods.loadIssuers.bind(this);
  loadMarkets = methods.loadMarkets.bind(this);

  /** Fees */
  fetchFees = methods.fetchFees.bind(this);
  fetchTradingFee = methods.fetchTradingFee.bind(this);
  fetchTradingFees = methods.fetchTradingFees.bind(this);
  fetchTransactionFee = methods.fetchTransactionFee.bind(this);
  fetchTransactionFees = methods.fetchTransactionFees.bind(this);

  /** Streaming */
  watchBalance = methods.watchBalance.bind(this);
  watchOrderBook = methods.watchOrderBook.bind(this);
  watchOrders = methods.watchOrders.bind(this);
  watchStatus = methods.watchStatus.bind(this);
  watchTicker = methods.watchTicker.bind(this);
  watchTickers = methods.watchTickers.bind(this);
  watchTrades = methods.watchTrades.bind(this);

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
