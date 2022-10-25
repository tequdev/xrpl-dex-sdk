import BigNumber from 'bignumber.js';
import { AccountAddress, CurrencyCode } from '../common';

export type IssuerCurrency = { code: CurrencyCode; issuer: AccountAddress };

export interface Issuer {
  name: string;
  trusted: boolean;
  website: string;
  addresses: AccountAddress[];
  currencies: CurrencyCode[];
  transferRates?: Record<AccountAddress, BigNumber>;
}

export type Issuers = Record<string, Issuer>;
