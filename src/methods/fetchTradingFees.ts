import { SDKContext, FetchTradingFeeResponse, FetchTradingFeesResponse, MarketSymbol } from '../models';

/**
 * Returns information about the fees incurred while trading on any market.
 * Returns a {@link FetchTradingFeesResponse}.
 *
 * @category Methods
 */
async function fetchTradingFees(this: SDKContext): Promise<FetchTradingFeesResponse | undefined> {
  const markets = await this.fetchMarkets();

  if (!markets) return;

  const responses: FetchTradingFeesResponse = [];

  Object.keys(markets).forEach((marketKey) => {
    const symbol = marketKey as MarketSymbol;

    const { baseFee, baseIssuer, quoteFee, quoteIssuer } = markets[symbol];

    const response: FetchTradingFeeResponse = {
      symbol,
      base: baseFee?.toString() || '0',
      quote: quoteFee?.toString() || '0',
      percentage: true,
      info: JSON.stringify({ market: markets[symbol] }),
    };

    if (baseIssuer) response.baseIssuer = baseIssuer;
    if (quoteIssuer) response.quoteIssuer = quoteIssuer;

    responses.push(response);
  });

  return responses;
}

export default fetchTradingFees;
