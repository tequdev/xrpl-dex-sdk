import { AccountAddress, CurrencyCode } from '../common';

export type IssuerCurrency = { code: CurrencyCode; issuer: AccountAddress };

export interface Issuer {
  name: string;
  trusted: boolean;
  website: string;
  addresses: AccountAddress[];
  currencies: IssuerCurrency[];
}

type Issuers = Record<string, Issuer>;

export default Issuers;
