var winston = require('winston');
// Define custom levels and matching colors
var logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
    avinash: 6,
};
winston.addColors({
    fatal: 'bgRed black',
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
    trace: 'cyan',
    avinash: 'magenta',
});
var logger = winston.createLogger({
    levels: logLevels,
    level: process.env.LOG_LEVEL || 'avinash', //// log everything from 'avinash' and above
    format: winston.format.cli(),
    transports: [
        new winston.transports.Console(),
    ],
});
//Another way-->
// const logger = winston.createLogger({
//     levels: logLevels,
//     level: 'avinash',
//     format: winston.format.combine(
//       winston.format.colorize({ all: true }),
//       winston.format.printf(({ level, message }) => {
//         return `[${level}]: ${message}`;
//       })
//     ),
//     transports: [new winston.transports.Console()],
//   });
// Log test messages
logger.fatal("Fatal message");
logger.error("Error message");
logger.warn("Warning message");
logger.info("Info message");
logger.debug("Debug message");
logger.trace("Trace message");
logger.avinash("Avinash message");
