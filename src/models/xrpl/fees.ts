import BigNumber from 'bignumber.js';
import { IssuerAddress } from '../common';

export type TransferRates = Record<IssuerAddress, BigNumber>;
