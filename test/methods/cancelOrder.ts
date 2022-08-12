// import _ from 'lodash';
// import 'mocha';

// // import requests from '../fixtures/requests';
// // import responses from '../fixtures/responses';
// // import rippled from '../fixtures/rippled';

// // import { cancelOrder, createOrder } from '../../src/methods';
// import { setupClient, teardownClient } from '../setup';
// // import { generateFundedWallet } from '../testUtils';
// // import { assertResultMatch } from '../testUtils';
// // import serverUrl from '../serverUrl';
// // import { CancelOrderParams, Order, OrderSide, OrderType } from '../../src/models';
// // import { TxResponse } from 'xrpl';
// // import { createFundedWallet } from '../setUpWallet';

// const TIMEOUT = 10000;

// describe('cancelOrder', function () {
//   this.timeout(TIMEOUT);

//   beforeEach(setupClient);
//   afterEach(teardownClient);

//   it('should cancel an existing Order', async function () {
//     // const testWallet = await generateFundedWallet(this.client);
//     // console.log(testWallet);
//     // this.mockRippled.addResponse('account_info', rippled.account_info.normal);
//     // this.mockRippled.addResponse('server_info', rippled.server_info.normal);
//     // this.mockRippled.addResponse('ledger', rippled.ledger.normal);
//     // this.mockRippled.addResponse('submit', rippled.offer_create.sell);
//     // this.mockRippled.addResponse('tx', rippled.offer_create.sell);
//     //
//     // const wallet = await createFundedWallet(this.client);
//     //
//     // const { symbol, side, type, amount, price, params } = requests.createOrder.sell;
//     //
//     // const newOrder: Order = await createOrder.call(
//     //   this.client,
//     //   symbol,
//     //   side as OrderSide,
//     //   type as OrderType,
//     //   amount,
//     //   price,
//     //   {
//     //     ...params,
//     //     wallet_secret: undefined,
//     //     wallet_public_key: wallet.publicKey,
//     //     wallet_private_key: wallet.privateKey,
//     //   }
//     // );
//     //
//     // console.log(newOrder);
//     //
//     // const newOrderInfo = JSON.parse(newOrder.info) as { OfferCreate: TxResponse['result'] };
//     //
//     // const cancelResponse = await cancelOrder.call(this.client, newOrder.id, {
//     //   wallet_public_key: wallet.publicKey,
//     //   wallet_private_key: wallet.privateKey,
//     //   //   wallet_secret: params.wallet_secret,
//     //   last_ledger_sequence: newOrderInfo.OfferCreate.LastLedgerSequence,
//     // } as CancelOrderParams);
//     // console.log(cancelResponse);
//     // assertResultMatch(cancelResponse, responses.cancelOrder);
//   });
// });
