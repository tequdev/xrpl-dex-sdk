import { ErrorResponse, LedgerEntryResponse } from 'xrpl';
import {
  TxResponse,
  XrplErrorTypes,
  XrplTransactionErrorTypes,
  BadRequest,
  OrderNotFound,
  InsufficientFunds,
} from '../models';

/**
 * Evaluates a LedgerEntry response and throws any errors found.
 *
 * @param offerResult LedgerEntryResponse to check
 */
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

/**
 * Evaluates a Transaction response and throws any errors found.
 *
 * @param txResponse TxResponse to check
 */
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
      throw new BadRequest('Issuer not found');
    } else if (txResponse.result.meta.TransactionResult === XrplTransactionErrorTypes.UnfundedOffer) {
      throw new InsufficientFunds('Insufficient balance to fund created offer');
    }
  }
};
