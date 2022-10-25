/**
 * CCXT Errors
 *
 * @link https://docs.ccxt.com/en/latest/manual.html#error-handling
 */
export class BaseError extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * Exchange Errors
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#exchangeerror
 */
export class ExchangeError extends BaseError {}
export class AuthenticationError extends ExchangeError {}
export class PermissionDenied extends AuthenticationError {}
export class AccountNotEnabled extends PermissionDenied {}
export class ArgumentsRequired extends ExchangeError {}
export class BadRequest extends ExchangeError {}
export class BadSymbol extends BadRequest {}
export class BadOrderId extends BadRequest {}
export class BadResponse extends ExchangeError {}
export class InsufficientFunds extends ExchangeError {}
export class InvalidAddress extends ExchangeError {}
export class InvalidOrder extends ExchangeError {}
export class OrderNotFound extends InvalidOrder {}
export class CancelPending extends InvalidOrder {}
export class NotSupported extends ExchangeError {}

/**
 * Network Errors
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#networkerror
 */
export class NetworkError extends BaseError {}
export class DDoSProtection extends NetworkError {}
export class RateLimitExceeded extends DDoSProtection {}
export class ExchangeNotAvailable extends NetworkError {}
export class RequestTimeout extends NetworkError {}
