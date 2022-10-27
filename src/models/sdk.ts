import BigNumber from 'bignumber.js';
import { Readable } from 'stream';
import { BroadcastClient, Client, ClientOptions, Wallet } from 'xrpl';
import { Currencies, Markets, OrderId, OrderSide, OrderType } from './ccxt';
import { CurrencyCode, IssuerAddress, MarketSymbol, UnixTimestamp, XrplNetwork } from './common';
import {
  CancelOrderResponse,
  CreateLimitBuyOrderParams,
  CreateLimitBuyOrderResponse,
  CreateLimitSellOrderParams,
  CreateLimitSellOrderResponse,
  CreateOrderParams,
  CreateOrderResponse,
  FetchBalanceParams,
  FetchBalanceResponse,
  FetchCanceledOrdersParams,
  FetchCanceledOrdersResponse,
  FetchClosedOrdersParams,
  FetchClosedOrdersResponse,
  FetchCurrenciesResponse,
  FetchFeesResponse,
  FetchIssuersResponse,
  FetchL2OrderBookParams,
  FetchL2OrderBookResponse,
  FetchMarketResponse,
  FetchMarketsResponse,
  FetchMyTradesParams,
  FetchMyTradesResponse,
  FetchOpenOrdersParams,
  FetchOpenOrdersResponse,
  FetchOrderBookParams,
  FetchOrderBookResponse,
  FetchOrderBooksParams,
  FetchOrderBooksResponse,
  FetchOrderParams,
  FetchOrderResponse,
  FetchOrdersParams,
  FetchOrdersResponse,
  FetchStatusResponse,
  FetchTickerParams,
  FetchTickerResponse,
  FetchTickersParams,
  FetchTickersResponse,
  FetchTradesParams,
  FetchTradesResponse,
  FetchTradingFeeResponse,
  FetchTradingFeesResponse,
  FetchTransactionFeeResponse,
  FetchTransactionFeesResponse,
  LoadCurrenciesResponse,
  LoadIssuersResponse,
  LoadMarketsResponse,
  WatchBalanceParams,
  WatchOrderBookResponse,
  WatchOrdersParams,
  WatchOrdersResponse,
  WatchStatusResponse,
  WatchTickerParams,
  WatchTickerResponse,
  WatchTickersParams,
  WatchTickersResponse,
  WatchTradesResponse,
} from './methods';
import { Issuers, TransferRates } from './xrpl';

export interface SDKParams {
  /** Name of XRPL network to connect to */
  network?: XrplNetwork;
  /** XRPL network JSON-RPC URL */
  jsonRpcUrl?: string;
  /** Options to pass into the XRPL JSON-RPC Client */
  jsonRpcOptions?: unknown;
  /** XRPL network Websockets URL */
  websocketsUrl?: string;
  /** Options to pass into the XRPL Websockets Client */
  websocketsOptions?: ClientOptions;
  /** Must provide both keys OR a secret phrase */
  walletPrivateKey?: string;
  walletPublicKey?: string;
  walletSecret?: string;
}

export interface SDKContext {
  params: SDKParams;
  broadcastClient: BroadcastClient;
  client: Client | BroadcastClient;
  wallet: Wallet;
  markets?: Markets;
  currencies?: Currencies;
  issuers?: Issuers;
  transferRates?: TransferRates;
  cancelOrder(id: OrderId): Promise<CancelOrderResponse>;
  createLimitBuyOrder(
    symbol: MarketSymbol,
    amount: string,
    price: string,
    params: CreateLimitBuyOrderParams
  ): Promise<CreateLimitBuyOrderResponse>;
  createLimitSellOrder(
    symbol: MarketSymbol,
    amount: string,
    price: string,
    params: CreateLimitSellOrderParams
  ): Promise<CreateLimitSellOrderResponse>;
  createOrder(
    symbol: MarketSymbol,
    side: OrderSide,
    type: OrderType,
    amount: string,
    price: string,
    params: CreateOrderParams
  ): Promise<CreateOrderResponse>;
  fetchBalance(params: FetchBalanceParams): Promise<FetchBalanceResponse>;
  fetchCanceledOrders(
    symbol?: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchCanceledOrdersParams
  ): Promise<FetchCanceledOrdersResponse>;
  fetchClosedOrders(
    symbol?: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchClosedOrdersParams
  ): Promise<FetchClosedOrdersResponse>;
  fetchCurrencies(): Promise<FetchCurrenciesResponse>;
  fetchOpenOrders(
    symbol?: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchOpenOrdersParams
  ): Promise<FetchOpenOrdersResponse>;
  fetchOrder(id: OrderId, symbol?: MarketSymbol, params?: FetchOrderParams): Promise<FetchOrderResponse>;
  fetchOrderBook(symbol: MarketSymbol, limit?: number, params?: FetchOrderBookParams): Promise<FetchOrderBookResponse>;
  fetchOrderBooks(
    symbols: MarketSymbol[],
    limit: number,
    params: FetchOrderBooksParams
  ): Promise<FetchOrderBooksResponse>;
  fetchOrders(
    symbol?: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchOrdersParams
  ): Promise<FetchOrdersResponse>;
  fetchIssuers(): Promise<FetchIssuersResponse>;
  fetchL2OrderBook(
    symbol: MarketSymbol,
    limit?: number,
    params?: FetchL2OrderBookParams
  ): Promise<FetchL2OrderBookResponse | undefined>;
  fetchMarket(symbol: MarketSymbol): Promise<FetchMarketResponse>;
  fetchMarkets(): Promise<FetchMarketsResponse>;
  fetchMyTrades(
    symbol: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchMyTradesParams
  ): Promise<FetchMyTradesResponse>;
  fetchFees(): Promise<FetchFeesResponse>;
  fetchStatus(): Promise<FetchStatusResponse>;
  fetchTicker(symbol: MarketSymbol, params: FetchTickerParams): Promise<FetchTickerResponse>;
  fetchTickers(symbols: MarketSymbol[], params: FetchTickersParams): Promise<FetchTickersResponse>;
  fetchTrades(
    symbol: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchTradesParams
  ): Promise<FetchTradesResponse>;
  fetchTradingFee(symbol: MarketSymbol): Promise<FetchTradingFeeResponse>;
  fetchTradingFees(): Promise<FetchTradingFeesResponse>;
  fetchTransactionFee(code: CurrencyCode): Promise<FetchTransactionFeeResponse>;
  fetchTransactionFees(codes: CurrencyCode[]): Promise<FetchTransactionFeesResponse>;
  fetchTransferRate(issuer: IssuerAddress): Promise<BigNumber>;
  loadCurrencies(reload?: boolean): Promise<LoadCurrenciesResponse>;
  loadIssuers(reload?: boolean): Promise<LoadIssuersResponse>;
  loadMarkets(reload?: boolean): Promise<LoadMarketsResponse>;
  watchBalance(params: WatchBalanceParams): Promise<Readable>;
  watchOrderBook(symbol: MarketSymbol, limit?: number): Promise<WatchOrderBookResponse>;
  watchOrders(symbol?: MarketSymbol, params?: WatchOrdersParams): Promise<WatchOrdersResponse>;
  watchStatus(): Promise<WatchStatusResponse>;
  watchTicker(symbol: MarketSymbol, params: WatchTickerParams): Promise<WatchTickerResponse>;
  watchTickers(symbols: MarketSymbol[], params: WatchTickersParams): Promise<WatchTickersResponse>;
  watchTrades(symbol: MarketSymbol): Promise<WatchTradesResponse>;
}
