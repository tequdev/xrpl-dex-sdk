/* eslint-disable no-param-reassign -- Necessary for test setup */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- Necessary for test setup */
import { Client, BroadcastClient } from 'xrpl';
import SDK from '../src';
import { XrplNetwork } from '../src/models';

import createMockRippled from './createMockRippled';
import { addresses } from './fixtures';
import serverUrl from './serverUrl';
import { getFreePort } from './testUtils';

/**
 * Local Tests
 */

async function setupMockRippledConnection(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Typing is too complicated
  testcase: any,
  port: number
): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    try {
      testcase.mockRippled = createMockRippled(port);
      testcase._mockedServerPort = port;
      // testcase.client = new Client(`ws://localhost:${port}`);
      // testcase.client.connect().then(resolve).catch(reject);
      testcase.sellerSdk = new SDK({
        walletSecret: addresses.AKT_SELLER_SECRET,
        websocketsUrl: `ws://localhost:${port}`,
      });
      await testcase.sellerSdk.connect();
      testcase.buyerSdk = new SDK({
        walletSecret: addresses.AKT_BUYER_SECRET,
        websocketsUrl: `ws://localhost:${port}`,
      });
      await testcase.buyerSdk.connect();
      resolve();
    } catch (err: unknown) {
      reject(err);
    }
  });
}

async function setupMockRippledConnectionForBroadcast(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Typing is too complicated
  testcase: any,
  ports: number[]
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const servers = ports.map((port) => `ws://localhost:${port}`);
    // eslint-disable-next-line max-len -- Too many rules to disable
    // eslint-disable-next-line @typescript-eslint/promise-function-async, @typescript-eslint/no-unsafe-return -- Typing is too complicated, not an async function
    testcase.mocks = ports.map((port) => createMockRippled(port));
    testcase.client = new BroadcastClient(servers);
    testcase.client.connect().then(resolve).catch(reject);
  });
}

async function setupClient(this: unknown): Promise<void> {
  return getFreePort().then(async (port) => {
    return setupMockRippledConnection(this, port);
  });
}

async function setupBroadcast(this: unknown): Promise<void> {
  return Promise.all([getFreePort(), getFreePort()]).then(async (ports) => {
    return setupMockRippledConnectionForBroadcast(this, ports);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Typing is too complicated
async function teardownClient(this: any, done: () => void): Promise<void> {
  await this.sellerSdk.disconnect();
  await this.buyerSdk.disconnect();
  this.client
    .disconnect()
    .then(() => {
      // eslint-disable-next-line no-negated-condition -- Easier to read with negation
      if (this.mockRippled != null) {
        this.mockRippled.close();
      } else {
        this.mocks.forEach((mock: { close: () => void }) => mock.close());
      }
      setImmediate(done);
    })
    .catch(done);
}

export { setupClient, teardownClient, setupBroadcast, createMockRippled };

/**
 * Remote Client
 */

export async function teardownRemoteClient(this: Mocha.Context): Promise<void> {
  this.client.removeAllListeners();
  this.client.disconnect();
}

export async function setupRemoteClient(this: Mocha.Context, server = serverUrl): Promise<void> {
  this.client = new Client(server);
  await this.client.connect();
}

/**
 * SDK with remote client
 */
export async function setupRemoteSDK(this: Mocha.Context, network: XrplNetwork): Promise<void> {
  this.sellerSdk = new SDK({ walletSecret: addresses.AKT_SELLER_SECRET, network });
  await this.sellerSdk.connect();
  this.buyerSdk = new SDK({ walletSecret: addresses.AKT_BUYER_SECRET, network });
  await this.buyerSdk.connect();
}

export async function teardownRemoteSDK(this: Mocha.Context): Promise<void> {
  await this.sellerSdk.disconnect();
  await this.buyerSdk.disconnect();
}

/**
 * SDK with local client
 */
export async function setupLocalSDK(this: Mocha.Context): Promise<void> {
  const port = await getFreePort();
  return await setupMockRippledConnection(this, port);
}

export async function teardownLocalSDK(this: Mocha.Context): Promise<void> {
  await this.sellerSdk.disconnect();
  await this.buyerSdk.disconnect();
}
