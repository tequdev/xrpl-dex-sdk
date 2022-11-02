/* eslint-disable no-param-reassign -- Necessary for test setup */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types -- Necessary for test setup */
import { Client, Wallet } from 'xrpl';
import SDK from '../src';
import { SDKParams, XrplNetwork } from '../src/models';

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
  return new Promise<void>(async (resolve, reject) => {
    try {
      // eslint-disable-next-line max-len -- Too many rules to disable
      // eslint-disable-next-line @typescript-eslint/promise-function-async, @typescript-eslint/no-unsafe-return -- Typing is too complicated, not an async function
      testcase.mockRippled = createMockRippled(ports[0]);
      // testcase.sellerSdk = new SDK({
      //   walletSecret: addresses.AKT_SELLER_SECRET,
      //   websocketsUrl: `ws://localhost:${ports[0]}`,
      // });
      // await testcase.sellerSdk.connect();
      // testcase.buyerSdk = new SDK({
      //   walletSecret: addresses.AKT_BUYER_SECRET,
      //   websocketsUrl: `ws://localhost:${ports[0]}`,
      // });
      // await testcase.buyerSdk.connect();
      // testcase.buyerSdk = new SDK({
      //   walletSecret: addresses.TST_BUYER_SECRET,
      //   websocketsUrl: `ws://localhost:${ports[0]}`,
      // });
      // await testcase.buyerSdk.connect();
      resolve();
    } catch (err: unknown) {
      reject(err);
    }
  });
}

export async function setupBroadcast(this: unknown): Promise<void> {
  return Promise.all([getFreePort()]).then(async (ports) => {
    return setupMockRippledConnectionForBroadcast(this, ports);
  });
}

export { createMockRippled };

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
export async function setupRemoteSDK(
  this: Mocha.Context,
  network: XrplNetwork,
  walletSecret?: string,
  done?: (error?: Error) => void,
  walletPublicKey?: string,
  walletPrivateKey?: string
): Promise<void> {
  const sdkParams: SDKParams = { network };

  let newWallet: Wallet | undefined;
  if (walletSecret) {
    sdkParams.walletSecret = walletSecret;
  } else if (walletPrivateKey && walletPublicKey) {
    sdkParams.walletPrivateKey = walletPrivateKey;
    sdkParams.walletPublicKey = walletPublicKey;
  } else {
    newWallet = Wallet.generate();
    sdkParams.walletPrivateKey = newWallet.privateKey;
    sdkParams.walletPublicKey = newWallet.publicKey;
  }

  this.sdk = new SDK(sdkParams);

  this.sdk.client.on('connected', () => {
    if (newWallet) {
      this.sdk.client
        .fundWallet(this.sdk.wallet)
        .then(({ balance }: { balance: number }) => {
          console.log(
            'Generated wallet:\n  Address: %s\n  Public key: %s\n  Private key: %s\n  Balance: %s XRP',
            this.sdk.wallet.classicAddress,
            this.sdk.wallet.publicKey,
            this.sdk.wallet.privateKey,
            balance
          );
          if (done) done();
        })
        .catch((error: Error) => {
          if (done) done(error);
        });
    } else {
      if (done) done();
    }
  });

  this.sdk.client.on('error', (error: Error) => {
    console.error('[beforeEach] error: ', error);
    if (done) done(error);
  });

  this.sdk.client.connect();
}

export function teardownRemoteSDK(this: Mocha.Context, done: (error?: Error) => void): void {
  if (this.sdk.client.isConnected()) {
    this.sdk.client.on('disconnected', () => {
      this.sdk.client.removeAllListeners();
      if (this.mockRippled) {
        this.mockRippled.close();
      } else if (this.mocks) {
        this.mocks.forEach((mock: { close: () => void }) => mock.close());
      }
      done();
    });

    this.sdk.client.disconnect();
  } else {
    done();
  }
}

/**
 * SDK with local client
 */
export interface SetupLocalSDKParams {
  walletSecret?: string;
  walletPublicKey?: string;
  walletPrivateKey?: string;
}

export async function setupLocalSDK(this: Mocha.Context, params?: SetupLocalSDKParams): Promise<void> {
  const port = await getFreePort();
  await setupMockRippledConnection(this, port);

  const sdkParams: SDKParams = {
    websocketsUrl: `ws://localhost:${port}`,
  };

  if (params) {
    const { walletPrivateKey, walletPublicKey, walletSecret } = params;
    if (walletSecret) sdkParams.walletSecret = walletSecret;
    else if (walletPrivateKey && walletPublicKey) {
      sdkParams.walletPrivateKey = walletPrivateKey;
      sdkParams.walletPublicKey = walletPublicKey;
    } else sdkParams.walletSecret = addresses.TST_BUYER_SECRET;
  }

  this.sdk = new SDK(sdkParams);
  await this.sdk.client.connect();
}

export async function teardownLocalSDK(this: Mocha.Context): Promise<void> {
  this.sdk.client.removeAllListeners();
  await this.sdk.client.disconnect();
}
