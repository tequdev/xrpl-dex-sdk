import { AccountAddress, CurrencyCode, PercentDecimal } from '../common';

export interface Currency {
  code: CurrencyCode;
  issuer: AccountAddress;
  fee?: PercentDecimal;
  name?: string;
  issuerName?: string;
  logo?: string;
  precision?: number;
}

type Currencies = Record<CurrencyCode, Currency[]>;

export default Currencies;
