/**
 * CCXT Price Ticker
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#price-tickers
 */
import { Readable } from 'stream';
import { MarketSymbol, PercentDecimal, UnixTimestamp } from '../common';

/**
 * @category Streams
 */
export type TickerStream = Readable;

/**
 * @category CCXT
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#ticker-structure
 */
export interface Ticker {
  // symbol of the market ('BTC/USD', 'ETH/BTC', ...)
  symbol: MarketSymbol;
  // (64-bit Unix Timestamp in milliseconds since Epoch 1 Jan 1970)
  timestamp: UnixTimestamp;
  // ISO8601 datetime string with milliseconds
  datetime: string;
  // highest price
  high: string;
  // lowest price
  low: string;
  // current best bid (buy) price
  bid: string;
  // current best bid (buy) amount (may be missing or undefined)
  bidVolume?: string;
  // current best ask (sell) price
  ask: string;
  // current best ask (sell) amount (may be missing or undefined)
  askVolume?: string;
  // volume weighed average price
  vwap: string;
  // opening price
  open: string;
  // price of last trade (closing price for current period)
  close: string;
  // same as `close`, duplicated for convenience
  last: string;
  // closing price for the previous period
  previousClose: string;
  // absolute change, `last - open`
  change: string;
  // relative change, `(change/open) * 100`
  percentage: PercentDecimal;
  // average price, `(last + open) / 2`
  average: string;
  // volume of base currency traded for last 24 hours
  baseVolume: string;
  // volume of quote currency traded for last 24 hours
  quoteVolume: string;
  // the original non-modified unparsed reply from exchange API
  info: Record<string, any>;
}
