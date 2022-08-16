import { MarketSymbol } from '../common';
import { Fee } from './Fees';

export default interface Trade {
  id: string; // string trade id
  order?: string; // string order id or undefined/None/null
  datetime: string; // ISO8601 datetime with milliseconds;
  timestamp: number; // Unix timestamp in milliseconds
  symbol: MarketSymbol; // symbol in CCXT format
  type?: string; // order type, 'market', 'limit', ... or undefined/None/null
  side: 'buy' | 'sell'; // direction of the trade, 'buy' or 'sell'
  amount: string; // amount of base currency
  price: string; // float price in quote currency
  takerOrMaker: 'taker' | 'maker'; // string, 'taker' or 'maker'
  cost: string; // total cost (including fees), `price * amount`
  fee: Fee;
  info: any; // the original decoded JSON as is
}
