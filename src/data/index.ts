import { Currencies, Issuers, Markets } from '../models';

import _currencies from './currencies.json';
import _issuers from './issuers.json';
import _markets from './markets.json';

const currencies = _currencies as Currencies;
const issuers = _issuers as Issuers;
const markets = _markets as Markets;

export { currencies, issuers, markets };
