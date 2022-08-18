import BigNumber from 'bignumber.js';
// import { dropsToXrp } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';

export const BN = (amount: string) => new BigNumber(amount);

export const parseCurrencyAmount = (amount: Amount, subtractor?: Amount): number => {
  const amountValue = typeof amount === 'object' ? parseFloat(amount.value) : parseFloat(amount);
  if (!subtractor) {
    return amountValue;
  } else {
    const subtractorValue = typeof subtractor === 'object' ? parseFloat(subtractor.value) : parseFloat(subtractor);
    return amountValue - subtractorValue;
  }
};
