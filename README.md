# XRPL Decentralized Exchange SDK

This TypeScript SDK provides a [CCXT-compatible API](https://docs.ccxt.com/en/latest/manual.html?#unified-api) for interacting with the [XRPL decentralized exchange](https://xrpl.org/decentralized-exchange.html).

A Python version of this SDK is available [here]().

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- NodeJS v16 (lts/gallium)
- Yarn

We recommend using [`nvm`]() to manage your NodeJS installations. If `nvm` is installed, type `nvm use` in the SDK's root folder to automatically switch to the proper Node version.

### Installation

Add the SDK as a dependency in your app:

```
$ yarn add xrpl-dex-sdk
```

#### From Source

```
$ git clone https://github.com/[ORG_LINK_HERE]/xrpl-dex-sdk.git
$ cd xrpl-dex-sdk
$ yarn
$ yarn build
```

The compiled SDK will be in the `/dist` folder.

## Usage

To use the SDK, import it into your script and initialize it:

```typescript
import { SDK, OrderSide, OrderType, Wallet } from 'xrpl-dex-sdk';

const sdk = new SDK({
  network: 'testnet',
  privateKey: /* Your XRPL wallet's private key */,
  publicKey: /* Your XRPL wallet's public key */,
});

await sdk.client.connect();
```

### Currencies, MarketSymbols, and ID Formatting

Currency codes, market symbols, and Order/Trade IDs are strings that follow the following formats:

| Type             | Format                           | Example                                       |
| ---------------- | -------------------------------- | --------------------------------------------- |
| CurrencyCode     | `[Currency]+[IssuerAddress]`     | `USD+rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq`      |
| MarketSymbol     | `[BaseCurrency]/[QuoteCurrency]` | `XRP/USD+rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq`  |
| OrderId, TradeId | `[AccountAddress]/[Sequence]`    | `rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR:30419065` |

### Examples

#### Placing an Order

The following example places an Order to buy 20 TST tokens, issued by the wallet at `rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd`, at a price of 1.5 XRP each:

```typescript
import { SDK, OrderSide, OrderType, Wallet } from 'xrpl-dex-sdk';

const example = async () => {
  const wallet = Wallet.generate();

  const sdk = new SDK({
    network: 'testnet',
    privateKey: wallet.privateKey,
    publicKey: wallet.publicKey,
  });

  await sdk.client.connect();

  const orderId = await sdk.createOrder(
    'TST+rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd/XRP',
    OrderSide.Buy,
    OrderType.Limit,
    '20',
    '1.5'
  );

  const order = await sdk.fetchOrder(orderId);

  console.log(order);
};

example();
```

It produces the following output:

```json
{
  ...,
  "status": "open",
  "symbol": "TST+rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd/XRP",
  "type": "limit",
  "timeInForce": "GTC",
  "side": "buy",
  "amount": "20",
  "price": "1.5",
  "average": "0",
  "filled": "0",
  "remaining": "20",
  "cost": "0",
  "trades": [],
  "info": {
    // ... raw response from XRPL server
  }
}
```

## Methods

See the full SDK documentation [here](https://github.com/AktaryTech/xrpl-dex-sdk/tree/main/docs), or run `yarn docs` to generate the documentation locally.

## Further Reading

### CCXT (CryptoCurrency eXchange Trading Library)

- [General Documentation](https://docs.ccxt.com/en/latest/index.html)
- [Unified API](https://docs.ccxt.com/en/latest/manual.html#unified-api)

### XRPL Ledger

- [General Documentation](https://xrpl.org/concepts.html)
- [Decentralized Exchange](https://xrpl.org/decentralized-exchange.html)
- [dEX Tutorial](https://xrpl.org/trade-in-the-decentralized-exchange.html)
