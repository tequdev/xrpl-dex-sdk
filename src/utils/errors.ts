import { OrderNotFound } from 'ccxt';
import { ErrorResponse, LedgerEntryResponse, Response } from 'xrpl';
import { XrplErrorTypes } from '../models';

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

export const handleTxErrors = (txResponse: Response) => {
  if (txResponse.status === 'error') {
    const { error, error_message, error_code } = txResponse as unknown as ErrorResponse;
    if (error_message || error === XrplErrorTypes.EntryNotFound) {
      throw new OrderNotFound(`${error_code ? error_code + ':' : ''} ${error_message || error}`);
    }
  } else if (!txResponse.result) {
    throw new OrderNotFound('No `result` field found');
  }
};
