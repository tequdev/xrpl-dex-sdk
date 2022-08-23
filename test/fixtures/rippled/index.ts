import accountInfo from './accountInfo.json';
import accountInfoIssuer from './accountInfoIssuer.json';
import accountInfoMaker from './accountInfoMaker.json';
import accountLines from './accountLines.json';
import normalFee from './fee.json';
import offerCreateBuy from './tx/offerCreateBuy.json';
import offerCreateSell from './tx/offerCreateSell.json';
import * as bookOffers from './bookOffers';
import usdBtcOffers from './bookOffersUsdBtc.json';
import btcUsdOffers from './bookOffersBtcUsd.json';
import usdXrpOffers from './bookOffersUsdXrp.json';
import xrpUsdOffers from './bookOffersXrpUsd.json';
import normalLedger from './ledger.json';
import normalLedgerData from './ledgerData.json';
import serverInfo from './serverInfo.json';
import normalServerState from './serverState.json';

const account_info = {
  normal: accountInfo,
  issuer: accountInfoIssuer,
  maker: accountInfoMaker,
};

const account_lines = {
  maker: accountLines,
};

const fee = {
  normal: normalFee,
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

const ledger_data = {
  normal: normalLedgerData,
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
  account_lines,
  book_offers,
  fee,
  ledger,
  ledger_data,
  offer_create,
  server_info,
  server_state,
};

export default rippled;
