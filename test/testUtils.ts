/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any -- required for
assertions. */
import net from 'net';

import { assert } from 'chai';
import _ from 'lodash';

import addresses from './fixtures/addresses.json';
import { AccountInfoRequest, Client, decode, Payment, Transaction, Wallet } from 'xrpl';
import { hashSignedTx } from 'xrpl/dist/npm/utils/hashes';

/**
 * Setup to run tests on both classic addresses and X-addresses.
 */
export const addressTests = [
  { type: 'Classic Address', address: addresses.AKT_BUYER },
  { type: 'X-Address', address: addresses.AKT_SELLER },
];

/**
 * Check the response against the expected result. Optionally validate
 * that response against a given schema as well.
 *
 * @param response - Response received from the method.
 * @param expected - Expected response from the method.
 * @param _schemaName - Name of the schema used to validate the shape of the response.
 */
export function assertResultMatch(response: any, expected: any, _schemaName?: string): void {
  if (expected.txJSON) {
    assert(response.txJSON);
    assert.deepEqual(JSON.parse(response.txJSON), JSON.parse(expected.txJSON), 'checkResult: txJSON must match');
  }
  if (expected.tx_json) {
    assert(response.tx_json);
    assert.deepEqual(response.tx_json, expected.tx_json, 'checkResult: tx_json must match');
  }
  assert.deepEqual(_.omit(response, ['txJSON', 'tx_json']), _.omit(expected, ['txJSON', 'tx_json']));
}

/**
 * Check that the promise rejects with an expected error.
 *
 * @param promise - The promise returned by the method.
 * @param instanceOf - Expected error type that the method will throw.
 * @param message - Expected error message/substring of the error message.
 */
export async function assertRejects(
  promise: PromiseLike<unknown>,
  instanceOf: any,
  message?: string | RegExp
): Promise<void> {
  try {
    await promise;
    assert(false, 'Expected an error to be thrown');
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }

    assert(error instanceof instanceOf, error.message);
    if (typeof message === 'string') {
      assert.strictEqual(error.message, message, 'Messages do not match');
    } else if (message instanceof RegExp) {
      assert(message.test(error.message));
    }
  }
}

// using a free port instead of a constant port enables parallelization
export async function getFreePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    let port: number;
    server.on('listening', function () {
      port = (server.address() as net.AddressInfo).port;
      server.close();
    });
    server.on('close', function () {
      resolve(port);
    });
    server.on('error', function (error) {
      reject(error);
    });
    server.listen(0);
  });
}

/**
 * Ignore WebSocket DisconnectErrors. Useful for making requests where we don't
 * care about the response and plan to teardown the test before the response
 * has come back.
 *
 * @param error - Thrown error.
 * @throws If error is not websocket disconnect error.
 */
export function ignoreWebSocketDisconnect(error: Error): void {
  if (error.message === 'websocket was closed') {
    return;
  }
  throw error;
}

const masterAccount = 'rG2upzWTq1kFDVWSHjsoZ3FSiJNWP3ANpR';
const masterSecret = 'spuZqrBF6SV9TyKJriggFV63Q46cd';

export async function ledgerAccept(client: Client): Promise<void> {
  const request = { command: 'ledger_accept' };
  await client.connection.request(request);
}

export function subscribeDone(client: Client, done: Mocha.Done): void {
  client.removeAllListeners();
  done();
}

export async function fundAccount(client: Client, wallet: Wallet): Promise<void> {
  const payment: Payment = {
    TransactionType: 'Payment',
    Account: masterAccount,
    Destination: wallet.classicAddress,
    // 2 times the amount needed for a new account (20 XRP)
    Amount: '400000000',
  };
  const response = await client.submit(payment, {
    wallet: Wallet.fromSeed(masterSecret),
  });
  if (response.result.engine_result !== 'tesSUCCESS') {
    // eslint-disable-next-line no-console -- happens only when something goes wrong
    console.log(response);
    assert.fail(`Response not successful, ${response.result.engine_result}`);
  }
  await ledgerAccept(client);
  const signedTx = _.omit(response.result.tx_json, 'hash');
  await verifySubmittedTransaction(client, signedTx as Transaction);
}

export async function fundTestnetAccount(client: Client, wallet: Wallet): Promise<void> {
  const payment: Payment = {
    TransactionType: 'Payment',
    Account: masterAccount,
    Destination: wallet.classicAddress,
    // 2 times the amount needed for a new account (20 XRP)
    Amount: '200000000',
  };

  const response = await client.submit(payment, {
    wallet: Wallet.fromSeed(masterSecret),
  });

  if (response.status !== 'tesSUCCESS') {
    // eslint-disable-next-line no-console -- happens only when something goes wrong
    console.log(response);
    assert.fail(`Response not successful, ${response.status}`);
  }
  console.log(response);
  // await ledgerAccept(client);
  // const signedTx = _.omit(response.result.tx_json, 'hash');
  // await verifySubmittedTransaction(client, signedTx as Transaction);
}

export async function generateFundedWallet(client: Client): Promise<Wallet> {
  const wallet = Wallet.generate();
  await fundAccount(client, wallet);
  return wallet;
}

export async function verifySubmittedTransaction(
  client: Client,
  tx: Transaction | string,
  hashTx?: string
): Promise<void> {
  const hash = hashTx ?? hashSignedTx(tx);
  const data = await client.request({
    command: 'tx',
    transaction: hash,
  });

  assert(data.result);
  assert.deepEqual(
    _.omit(data.result, ['date', 'hash', 'inLedger', 'ledger_index', 'meta', 'validated']),
    typeof tx === 'string' ? decode(tx) : tx
  );
  if (typeof data.result.meta === 'object') {
    assert.strictEqual(data.result.meta.TransactionResult, 'tesSUCCESS');
  } else {
    assert.strictEqual(data.result.meta, 'tesSUCCESS');
  }
}

export async function testTransaction(client: Client, transaction: Transaction, wallet: Wallet): Promise<void> {
  // Accept any un-validated changes.
  await ledgerAccept(client);

  // sign/submit the transaction
  const response = await client.submit(transaction, { wallet });

  // check that the transaction was successful
  assert.equal(response.type, 'response');
  assert.equal(response.result.engine_result, 'tesSUCCESS', response.result.engine_result_message);

  // check that the transaction is on the ledger
  const signedTx = _.omit(response.result.tx_json, 'hash');
  await ledgerAccept(client);
  await verifySubmittedTransaction(client, signedTx as Transaction);
}

export async function getXRPBalance(client: Client, wallet: Wallet): Promise<string> {
  const request: AccountInfoRequest = {
    command: 'account_info',
    account: wallet.classicAddress,
  };
  return (await client.request(request)).result.account_data.Balance;
}
