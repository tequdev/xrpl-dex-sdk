import { AccountAddress, CurrencyCode } from '../common';

export interface Currency {
  code: CurrencyCode;
  issuer: AccountAddress;
  name?: string;
  issuerName?: string;
  logo?: string;
  precision?: number;
}

type Currencies = Record<CurrencyCode, Currency[]>;

export default Currencies;
