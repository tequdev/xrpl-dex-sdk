# XRPL Decentralized Exchange SDK

This TypeScript SDK provides a [CCXT-compatible API](https://docs.ccxt.com/en/latest/manual.html?#unified-api) for interacting with the [XRPL decentralized exchange](https://xrpl.org/decentralized-exchange.html).

A Python version of this SDK is available [here](https://pypi.org/project/xrpl-dex-sdk/).

## Installation

This package requires [NodeJS v16](https://nodejs.org/en/blog/release/v16.16.0/) or later.

> NOTE: We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage your NodeJS installations. If `nvm` is installed, type `nvm use` in the SDK's root folder to automatically switch to the proper Node version.

### From NPM

Add the SDK package to your project:

#### Using NPM

```
$ npm install -S xrpl-dex-sdk
```

#### Using Yarn

```
$ yarn add xrpl-dex-sdk
```

### From Source

Make sure you have the following installed on your system:

- NodeJS v16 (lts/gallium)
- Yarn

Clone the repo, install dependencies, and build the SDK:

```
$ git clone https://github.com/AktaryTech/xrpl-dex-sdk.git
$ cd xrpl-dex-sdk
$ yarn
$ yarn build
```

The compiled SDK will be in the `/dist` folder.

## Usage

To use the SDK, import it into your script and create a new SDK instance:

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

The following example places an Order to buy 20 TST tokens, issued by the account at `rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd`, at a price of 1.5 XRP each:

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

```
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

For full SDK documentation, see the `docs` folder. To re-generate documentation, run `yarn docs:build`.

## Further Reading

### CCXT (CryptoCurrency eXchange Trading Library)

- [General Documentation](https://docs.ccxt.com/en/latest/index.html)
- [Unified API](https://docs.ccxt.com/en/latest/manual.html#unified-api)

### XRP Ledger

- [General Documentation](https://xrpl.org/concepts.html)
- [Decentralized Exchange](https://xrpl.org/decentralized-exchange.html)
- [dEX Tutorial](https://xrpl.org/trade-in-the-decentralized-exchange.html)

## Contributing

Pull requests, issues and comments are welcome! Make sure to add tests for new features and bug fixes.

## Contact

For questions, suggestions, etc, you can reach the maintainer at [info@aktarytech.com](mailto:info@aktarytech.com).

## License

The software is distributed under the MIT license. See [LICENSE](https://github.com/AktaryTech/xrpl-dex-sdk/blob/main/LICENSE) for details.

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this library by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Copyright

Copyright © 2022 Ripple Labs, Inc.
