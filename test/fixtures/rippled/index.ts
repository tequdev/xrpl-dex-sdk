import offerCreateBuy from './tx/offerCreateBuy.json';
import offerCreateSell from './tx/offerCreateSell.json';
import normalServerState from './serverState.json';
import * as bookOffers from './bookOffers';
import usdBtcOffers from './bookOffersUsdBtc.json';
import btcUsdOffers from './bookOffersBtcUsd.json';
import usdXrpOffers from './bookOffersUsdXrp.json';
import xrpUsdOffers from './bookOffersXrpUsd.json';

const book_offers = {
  normalBids: bookOffers.requestBookOffersBidsResponse,
  partiallyFundedBids: bookOffers.requestBookOffersBidsPartialFundedResponse,
  normalAsks: bookOffers.requestBookOffersAsksResponse,
  partiallyFundedAsks: bookOffers.requestBookOffersAsksPartialFundedResponse,
  xrpBase: bookOffers.requestBookOffersXRPBaseResponse,
  xrpCounter: bookOffers.requestBookOffersXRPCounterResponse,
  usdBtc: usdBtcOffers,
  btcUsd: btcUsdOffers,
  usdXrp: usdXrpOffers,
  xrpUsd: xrpUsdOffers,
};

const offer_create = {
  buy: offerCreateBuy,
  sell: offerCreateSell,
};

const server_state = {
  normal: normalServerState,
};

const rippled = {
  book_offers,
  offer_create,
  server_state,
};

export default rippled;
