import { AccountAddress, CurrencyCode } from '../common';

export interface Currency {
  code: CurrencyCode;
  issuers: AccountAddress[];
  name?: string;
  precision?: number;
  numericId?: number;
}

export type Currencies = Record<CurrencyCode, Currency>;
