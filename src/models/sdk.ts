import { Client, ClientOptions, Wallet } from 'xrpl';
import { Currencies, Markets, OrderSide, OrderType } from './ccxt';
import { AccountSequencePair, CurrencyCode, MarketSymbol, UnixTimestamp, XrplNetwork } from './common';
import {
  CancelOrderParams,
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
  FetchMarketResponse,
  FetchMarketsResponse,
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
  FetchTradingFeeResponse,
  FetchTradingFeesResponse,
  FetchTransactionFeeParams,
  FetchTransactionFeeResponse,
  FetchTransactionFeesParams,
  FetchTransactionFeesResponse,
  LoadCurrenciesResponse,
  LoadIssuersResponse,
  LoadMarketsResponse,
} from './methods';
import { Issuers } from './xrpl';

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
  client: Client;
  wallet: Wallet;
  markets?: Markets;
  currencies?: Currencies;
  issuers?: Issuers;
  connect(): void;
  disconnect(): void;
  cancelOrder(id: AccountSequencePair, params: CancelOrderParams): Promise<CancelOrderResponse | undefined>;
  createLimitBuyOrder(
    symbol: MarketSymbol,
    amount: string,
    price: string,
    params: CreateLimitBuyOrderParams
  ): Promise<CreateLimitBuyOrderResponse | undefined>;
  createLimitSellOrder(
    symbol: MarketSymbol,
    amount: string,
    price: string,
    params: CreateLimitSellOrderParams
  ): Promise<CreateLimitSellOrderResponse | undefined>;
  createOrder(
    symbol: MarketSymbol,
    side: OrderSide,
    type: OrderType,
    amount: string,
    price: string,
    params: CreateOrderParams
  ): Promise<CreateOrderResponse | undefined>;
  fetchBalance(params: FetchBalanceParams): Promise<FetchBalanceResponse | undefined>;
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
  fetchCurrencies(): Promise<FetchCurrenciesResponse | undefined>;
  fetchOpenOrders(
    symbol?: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchOpenOrdersParams
  ): Promise<FetchOpenOrdersResponse>;
  fetchOrder(id: AccountSequencePair, symbol?: MarketSymbol, params?: FetchOrderParams): Promise<FetchOrderResponse>;
  fetchOrderBook(
    symbol: MarketSymbol,
    limit: number,
    params: FetchOrderBookParams
  ): Promise<FetchOrderBookResponse | undefined>;
  fetchOrderBooks(
    symbols: MarketSymbol[],
    limit: number,
    params: FetchOrderBooksParams
  ): Promise<FetchOrderBooksResponse | undefined>;
  fetchOrders(
    symbol?: MarketSymbol,
    since?: UnixTimestamp,
    limit?: number,
    params?: FetchOrdersParams
  ): Promise<FetchOrdersResponse>;
  fetchStatus(): Promise<FetchStatusResponse | undefined>;
  fetchIssuers(): Promise<FetchIssuersResponse | undefined>;
  fetchMarket(): Promise<FetchMarketResponse | undefined>;
  fetchMarkets(): Promise<FetchMarketsResponse | undefined>;
  fetchFees(): Promise<FetchFeesResponse | undefined>;
  fetchTradingFee(symbol: MarketSymbol): Promise<FetchTradingFeeResponse | undefined>;
  fetchTradingFees(): Promise<FetchTradingFeesResponse | undefined>;
  fetchTransactionFee(
    code: CurrencyCode,
    params: FetchTransactionFeeParams
  ): Promise<FetchTransactionFeeResponse | undefined>;
  fetchTransactionFees(
    codes: CurrencyCode[],
    params: FetchTransactionFeesParams
  ): Promise<FetchTransactionFeesResponse | undefined>;
  loadCurrencies(reload?: boolean): Promise<LoadCurrenciesResponse | undefined>;
  loadIssuers(reload?: boolean): Promise<LoadIssuersResponse | undefined>;
  loadMarkets(reload?: boolean): Promise<LoadMarketsResponse | undefined>;
  [key: string]: any;
}
