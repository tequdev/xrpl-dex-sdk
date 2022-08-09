// const _ = require('lodash');
const _currencies = require('../src/data/currencies.json');
// const _issuers = require('../src/data/issuers.json');
const xrpl = require('xrpl');
// const { fetchTransactionFee } = require('../src/methods');

async function getFees(code, params = {}) {
  const client = new xrpl.Client(`wss://s1.ripple.com`);

  await client.connect();

  const { result: feesResult } = await client.request({ command: 'fee' });

  const currentFee = parseInt(feesResult.drops.open_ledger_fee);
  const baseFee = parseInt(feesResult.drops.base_fee);
  const currentRate = currentFee / baseFee / 100;

  const currencies = { ..._currencies };

  for (let c = 0, cl = Object.keys(_currencies).length; c < cl; c += 1) {
    const currencyKey = Object.keys(_currencies)[c];
    for (let i = 0, il = _currencies[currencyKey].length; i < il; i += 1) {
      const currency = _currencies[currencyKey][i];
      const issuerAccount = await client.request({
        command: 'account_info',
        account: currency.issuer,
        ledger_index: 'validated',
      });
      if (issuerAccount.result.account_data?.TransferRate) {
        const rate = issuerAccount.result.account_data?.TransferRate;
        const fee = xrpl.transferRateToDecimal(typeof rate === 'string' ? parseInt(rate) : rate);
        currencies[currencyKey][i] = {
          ..._currencies[currencyKey][i],
          fee: parseFloat(fee),
        };
      }
      //   console.log('currencies[currencyKey][i]: ', currencies[currencyKey][i]);
    }
  }

  const transactionFee = {};

  Object.keys(currencies).forEach((currencyKey) => {
    if (currencyKey === code) {
      currencies[currencyKey].forEach((currency) => {
        if (params.issuer === currency.issuer) {
          if (!transactionFee[currencyKey]) {
            transactionFee[currencyKey] = {};
          }
          transactionFee[currencyKey][currency.issuer] = currency.fee || 0;
        }
      });
    }
  });

  const response = {
    current: {
      currency: 'XRP',
      cost: currentFee,
      rate: currentRate,
    },
    transfer: transactionFee,
    info: JSON.stringify({ feesResult }),
  };

  console.log(response);

  return currencies;
}

getFees('USD');
