import { format, createLogger, transports } from 'winston';
import * as config from 'config';
import * as packageJson from '../../../package.json';

const { combine, timestamp, label, printf } = format;
const name = (packageJson as any).name;
const SERVER_LOGGER = 'server';
const { env } = config.get(SERVER_LOGGER);
const loggerFormat = printf((info: any) => {
  return `${info.timestamp} [${name} ${env}]: ${info.message}`;
});
const winstonConfig = {
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    loggerFormat
  ),
  transports: [
    new transports.Console({
      level: env === 'development' ? 'debug' : 'info',
      colorize: true
    })
  ]
};
export const logger = createLogger(winstonConfig);
