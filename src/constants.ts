export const DEFAULT_LIMIT = process.env.XRPL_DEFAULT_LIMIT ? parseInt(process.env.XRPL_DEFAULT_LIMIT) : 20;
export const DEFAULT_MAX_SEARCH = process.env.XRPL_DEFAULT_MAX_SEARCH
  ? parseInt(process.env.XRPL_DEFAULT_MAX_SEARCH)
  : 100;

export const FEE_CURRENCY = 'XRP';

export const REFERENCE_TX_COST = '10';
export const ACCOUNT_DELETE_TX_COST = '2000000';
