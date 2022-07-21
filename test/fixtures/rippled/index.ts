import normalServerState from './serverState.json';
import * as bookOffers from './bookOffers';
import usdXrpOffers from './bookOffersUsdXrp.json';
import xrpUsdOffers from './bookOffersXrpUsd.json';

const book_offers = {
  normalBids: bookOffers.requestBookOffersBidsResponse,
  partiallyFundedBids: bookOffers.requestBookOffersBidsPartialFundedResponse,
  normalAsks: bookOffers.requestBookOffersAsksResponse,
  partiallyFundedAsks: bookOffers.requestBookOffersAsksPartialFundedResponse,
  xrpBase: bookOffers.requestBookOffersXRPBaseResponse,
  xrpCounter: bookOffers.requestBookOffersXRPCounterResponse,
  usdXrp: usdXrpOffers,
  xrpUsd: xrpUsdOffers,
};

const server_state = {
  normal: normalServerState,
};

const rippled = {
  book_offers,
  server_state,
};

export default rippled;
