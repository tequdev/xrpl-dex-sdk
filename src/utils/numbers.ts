import BigNumber from 'bignumber.js';
import { Amount } from 'xrpl/dist/npm/models/common';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { BigNumberish } from '../models';

export const BN = (amount: BigNumberish) => new BigNumber(amount);

export const parseCurrencyAmount = (amount: Amount, subtractor?: Amount): number => {
  const amountValue = typeof amount === 'object' ? parseFloat(amount.value) : parseFloat(amount);
  if (!subtractor) {
    return amountValue;
  } else {
    const subtractorValue = typeof subtractor === 'object' ? parseFloat(subtractor.value) : parseFloat(subtractor);
    return amountValue - subtractorValue;
  }
};

export const subtractAmounts = (amount: Amount, subtractor: Amount): Amount => {
  const amountValue = parseAmountValue(amount);
  const subtractorValue = parseAmountValue(subtractor);
  const resultValue = (amountValue - subtractorValue).toString();

  return typeof amount === 'string'
    ? resultValue
    : {
        ...amount,
        value: resultValue,
      };
};

export const subtractAmountValues = (amount: Amount, subtractor: Amount): number => {
  const amountValue = parseAmountValue(amount);
  const subtractorValue = parseAmountValue(subtractor);
  return amountValue - subtractorValue;
};

export const divideAmountValues = (amount: Amount, divisor: Amount): number => {
  const amountValue = parseAmountValue(amount);
  const divisorValue = parseAmountValue(divisor);
  return amountValue / divisorValue;
};
