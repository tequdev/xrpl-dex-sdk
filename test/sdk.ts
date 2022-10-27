import SDK from '../src';
import { SDKParams, XrplNetwork } from '../src/models';
import addresses from './fixtures/addresses.json';

async function sdkTest() {
  const sdkParams: SDKParams = {
    network: XrplNetwork.Testnet,
  };
  const seller = new SDK({
    ...sdkParams,
    walletSecret: addresses.AKT_SELLER_SECRET,
  });
  await seller.client.connect();
  await seller.loadMarkets();
  await seller.loadCurrencies();
  await seller.loadIssuers();
  const buyer = new SDK({
    ...sdkParams,
    walletSecret: addresses.AKT_BUYER_SECRET,
  });
  await buyer.client.connect();
  await buyer.loadMarkets();
  await buyer.loadCurrencies();
  await buyer.loadIssuers();
}

sdkTest();
