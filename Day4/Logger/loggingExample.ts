const winston = require('winston');
const { combine, timestamp, printf, colorize, align } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
});

logger.info('Info message');
logger.error('Error message');
logger.warn('Warning message');

// [2025-05-08 12:11:23.756 PM] info:      Info message
// [2025-05-08 12:11:23.760 PM] error:     Error message
// [2025-05-08 12:11:23.760 PM] warn:      Warning message