import accountInfo from './accountInfo.json';
import offerCreateBuy from './tx/offerCreateBuy.json';
import offerCreateSell from './tx/offerCreateSell.json';
import * as bookOffers from './bookOffers';
import usdBtcOffers from './bookOffersUsdBtc.json';
import btcUsdOffers from './bookOffersBtcUsd.json';
import usdXrpOffers from './bookOffersUsdXrp.json';
import xrpUsdOffers from './bookOffersXrpUsd.json';
import normalLedger from './ledger.json';
import serverInfo from './serverInfo.json';
import normalServerState from './serverState.json';

const account_info = {
  normal: accountInfo,
};

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

const ledger = {
  normal: normalLedger,
};

const offer_create = {
  buy: offerCreateBuy,
  sell: offerCreateSell,
};

const server_info = {
  normal: serverInfo,
};

const server_state = {
  normal: normalServerState,
};

const rippled = {
  account_info,
  book_offers,
  ledger,
  offer_create,
  server_info,
  server_state,
};

export default rippled;
