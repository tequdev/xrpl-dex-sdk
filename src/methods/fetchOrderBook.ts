import _ from 'lodash';
import { BookOffersRequest, dropsToXrp } from 'xrpl';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { CURRENCY_PRECISION, DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT } from '../constants';
import {
  OrderBookAsk,
  MarketSymbol,
  FetchOrderBookParams,
  FetchOrderBookResponse,
  SDKContext,
  OrderBookBid,
  OrderBook,
} from '../models';
import {
  BN,
  getBaseAmountKey,
  getOrderSideFromOffer,
  getQuoteAmountKey,
  getTakerAmount,
  parseMarketSymbol,
} from '../utils';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link FetchOrderBookResponse}.
 *
 * @category Methods
 */
async function fetchOrderBook(
  this: SDKContext,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Number of results to return */
  limit: number = DEFAULT_LIMIT,
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrderBookParams = {
    searchLimit: DEFAULT_SEARCH_LIMIT,
  }
): Promise<FetchOrderBookResponse> {
  const { searchLimit } = params;

  const [baseCurrency, quoteCurrency] = parseMarketSymbol(symbol);

  const baseAmount = getTakerAmount(baseCurrency);
  const quoteAmount = getTakerAmount(quoteCurrency);

  const orderBookRequest: BookOffersRequest = {
    id: symbol,
    command: 'book_offers',
    taker_pays: baseAmount,
    taker_gets: quoteAmount,
    limit: searchLimit,
    both: true,
  };

  if (params.ledgerHash) orderBookRequest.ledger_hash = params.ledgerHash;
  if (params.ledgerIndex) orderBookRequest.ledger_index = params.ledgerIndex;

  const orderBookResponse = await this.client.request(orderBookRequest);
  const offers = orderBookResponse.result.offers;

  const bids: OrderBookBid[] = [];
  const asks: OrderBookAsk[] = [];

  for (const offer of offers) {
    const side = getOrderSideFromOffer(offer);
    const baseAmount = offer[getBaseAmountKey(side)];
    const baseValue = BN(
      typeof baseAmount === 'string' ? dropsToXrp(parseAmountValue(baseAmount)) : parseAmountValue(baseAmount)
    );
    const quoteAmount = offer[getQuoteAmountKey(side)];
    const quoteValue = BN(
      typeof quoteAmount === 'string' ? dropsToXrp(parseAmountValue(quoteAmount)) : parseAmountValue(quoteAmount)
    );

    const amount = baseValue;
    const price = quoteValue.dividedBy(amount);

    const orderBookEntry = [
      (+price.toPrecision(CURRENCY_PRECISION)).toString(),
      (+amount.toPrecision(CURRENCY_PRECISION)).toString(),
    ];

    if (side === 'sell') asks.push(orderBookEntry as OrderBookAsk);
    else bids.push(orderBookEntry as OrderBookBid);

    if (bids.length + asks.length > limit) break;
  }

  const nonce = orderBookResponse.result.ledger_index ?? Date.now();

  const response: OrderBook = {
    symbol,
    nonce,
    bids,
    asks,
  };

  return response;
}

export default fetchOrderBook;
