const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp(), json()),
    transports: [
      new winston.transports.File({
        filename: 'combined.log',
      }),
      new winston.transports.File({
        filename: 'app-error.log',
        level: 'error',
      }),
    ],
  });
  