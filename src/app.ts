import { config } from 'dotenv';
config();
import Logging from './library/logging';

Logging.info('info');
Logging.warn('warn');
Logging.error('error');
Logging.log('log or success');
