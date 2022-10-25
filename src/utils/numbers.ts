import BigNumber from 'bignumber.js';
import { Amount } from 'xrpl/dist/npm/models/common';
import { BigNumberish } from '../models';

/**
 * Alias for quickly creating BigNumber instances.
 *
 * @param amount - `String` or `number` value to create BigNumber from
 * @returns BigNumber
 */
export const BN = (amount: BigNumberish) => new BigNumber(amount);

/**
 * Parses an Amount object and returns the value as a BigNumber.
 *
 * @param amount - Amount object to parse
 * @returns BigNumber
 */
export const parseAmountValue = (amount: Amount): BigNumber => BN(typeof amount === 'string' ? amount : amount.value);

/**
 * Parses an Amount object and returns the value as a BigNumber, including subtracting
 * a provided `subtractor` value from the given Amount.
 *
 * @param amount - Amount object to parse
 * @param subtractor (Optional) Amount object to subtract from first amount
 * @returns BigNumber
 */
export const parseCurrencyAmount = (amount: Amount, subtractor?: Amount): BigNumber => {
  const amountValue = typeof amount === 'object' ? BN(amount.value) : BN(amount);
  if (!subtractor) {
    return amountValue;
  } else {
    const subtractorValue = typeof subtractor === 'object' ? BN(subtractor.value) : BN(subtractor);
    return amountValue.minus(subtractorValue);
  }
};

/**
 * Subtracts one Amount object from another, returning the difference as an Amount.
 *
 * @param amount - Amount to use as minuend
 * @param subtractor Amount to use as subtrahend
 * @returns Difference between provided values
 */
export const subtractAmounts = (amount: Amount, subtractor: Amount): Amount => {
  const amountValue = BN(parseAmountValue(amount));
  const subtractorValue = BN(parseAmountValue(subtractor));
  const resultValue = amountValue.minus(subtractorValue);

  return typeof amount === 'string'
    ? resultValue.toString()
    : {
        ...amount,
        value: resultValue.toString(),
      };
};
