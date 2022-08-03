import BigNumber from 'bignumber.js';

export type AccountAddress = string;

export type CurrencyCode = string;
export type MarketSymbol = string;

export type BigNumberish = BigNumber | number | string;

export enum RippleNetwork {
  Mainnet = 'mainnet',
  MainnetFullHistory1 = 'mainnet_full_history_1',
  MainnetFullHistory2 = 'mainnet_full_history_2',
  Testnet = 'testnet',
  Devnet = 'devnet',
  NFTDevnet = 'nft_devnet',
  Local = 'local',
}

export interface BaseParams {
  network?: RippleNetwork;
}
