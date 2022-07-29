import BigNumber from 'bignumber.js';
import { dropsToXrp } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';

export const BN = (amount: string) => new BigNumber(amount);

export const parseCurrencyAmount = (amount: Amount): string => {
  if (typeof amount === 'object') {
    return amount.value;
  } else {
    const bigAmount = BN(amount);
    return dropsToXrp(bigAmount);
  }
};

export const stringToInt = (intString: string, radix?: number): number | undefined =>
  parseInt(intString, radix) || undefined;

export const stringToFloat = (floatString: string): number | undefined => parseFloat(floatString) || undefined;
