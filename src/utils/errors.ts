import { BadRequest, OrderNotFound } from 'ccxt';
import { ErrorResponse, LedgerEntryResponse } from 'xrpl';
import { TxResponse, XrplErrorTypes, XrplTransactionErrorTypes } from '../models';

export const handleLedgerEntryErrors = (offerResult: LedgerEntryResponse) => {
  if (offerResult.status === 'error') {
    const { error, error_message, error_code } = offerResult as unknown as ErrorResponse;
    if (error_message || error === XrplErrorTypes.EntryNotFound) {
      throw new OrderNotFound(`${error_code ? error_code + ':' : ''} ${error_message || error}`);
    }
  } else if (!offerResult.result.node) {
    throw new OrderNotFound('No object found for this Order');
  }
};

export const handleTxErrors = (txResponse: TxResponse) => {
  if (txResponse.status === 'error') {
    const { error, error_message, error_code } = txResponse as unknown as ErrorResponse;
    if (error_message || error === XrplErrorTypes.EntryNotFound) {
      throw new OrderNotFound(`${error_code ? error_code + ':' : ''} ${error_message || error}`);
    }
  } else if (!txResponse.result) {
    throw new OrderNotFound('No `result` field found');
  } else if (typeof txResponse.result.meta === 'object') {
    if (txResponse.result.meta.TransactionResult === XrplTransactionErrorTypes.NoIssuer) {
      throw new BadRequest(`Issuer not found`);
    }
  }
};
