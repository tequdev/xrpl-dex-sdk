import debug from 'debug';
import { LOGGER_ROOT_NAMESPACE } from '../constants';

export const logger = (namespace: string) => debug(`${LOGGER_ROOT_NAMESPACE}:${namespace}`);
