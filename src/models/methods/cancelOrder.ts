import { Sequence } from '../common';

/**
 * Expected response from a cancelOrder call
 *
 * @category Responses
 */
export type CancelOrderResponse = { id: Sequence; info: Record<string, any> } | undefined;
