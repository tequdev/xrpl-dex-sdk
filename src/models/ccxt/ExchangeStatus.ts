export type ExchangeStatusType = 'ok' | 'shutdown' | 'error' | 'maintenance';

export default interface ExchangeStatus {
  /** Status is one of 'ok', 'shutdown', 'error', 'maintenance' */
  status: ExchangeStatusType;
  /** Integer, last updated timestamp in milliseconds if updated via the API */
  updated?: number;
  /** When the maintenance or outage is expected to end */
  eta?: string | number;
  /** A link to a GitHub issue or to an exchange post on the subject */
  url?: string;
}
