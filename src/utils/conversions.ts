import { BadRequest } from 'ccxt';
import { OfferCreate, OfferCreateFlags, setTransactionFlagsToNumber, xrpToDrops } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { AccountAddress, BigNumberish, CurrencyCode, MarketSymbol, OrderTimeInForce } from '../models';

/**
 * Market Symbols
 */
export const parseMarketSymbol = (symbol: MarketSymbol): [base: CurrencyCode, quote: CurrencyCode] => {
  const [base, quote] = symbol.split('/');
  return [base, quote];
};

export const getMarketSymbol = (base: Amount, quote: Amount): MarketSymbol => {
  const symbol: string[] = [];

  symbol.push(typeof base === 'object' ? base.currency : 'XRP');
  symbol.push(typeof quote === 'object' ? quote.currency : 'XRP');

  return symbol.join('/');
};

/**
 * Currencies
 */
export const getAmountIssuer = (amount: Amount): AccountAddress | undefined =>
  typeof amount === 'object' ? amount.issuer : undefined;

export const getAmountCurrencyCode = (amount: Amount): CurrencyCode =>
  typeof amount === 'object' ? amount.currency : 'XRP';

export const getAmount = (code: CurrencyCode, value: BigNumberish, issuer?: AccountAddress): Amount => {
  if (code === 'XRP') {
    return value.toString().includes('.') ? xrpToDrops(value) : value.toString();
  } else {
    if (!issuer) throw new BadRequest('Non-XRP currencies must specify an issuer');
    return {
      currency: code,
      issuer,
      value: value.toString(),
    };
  }
};

/**
 * Offers
 */
export const offerCreateFlagsToTimeInForce = (tx: OfferCreate): OrderTimeInForce | undefined => {
  setTransactionFlagsToNumber(tx);
  const flags = tx.Flags as number;
  if (flags === 0 && !tx.Expiration) {
    return 'GTC';
  } else if ((flags & OfferCreateFlags.tfFillOrKill) === OfferCreateFlags.tfFillOrKill) {
    return 'FOK';
  } else if ((flags & OfferCreateFlags.tfImmediateOrCancel) === OfferCreateFlags.tfImmediateOrCancel) {
    return 'IOC';
  } else if ((flags & OfferCreateFlags.tfPassive) === OfferCreateFlags.tfPassive) {
    return 'PO';
  }
};

export const stringToInt = (input?: string): number | undefined => {
  try {
    return input ? parseInt(input) : 0;
  } catch (err) {
    return;
  }
};

export const stringToFloat = (input?: string): number | undefined => {
  try {
    return input ? parseFloat(input) : 0;
  } catch (err) {
    return;
  }
};
