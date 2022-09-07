const { XRPL, methods } = require('../dist');

async function sdkTest() {
  const sdk = new XRPL();

  sdk.secret = 'snHPWDrjaQg95pSB7FMCyH3XCTdfb';

  console.log(sdk);

  //   const currencies = await sdk.fetchCurrencies();

  //   console.log(currencies);
}

sdkTest();
