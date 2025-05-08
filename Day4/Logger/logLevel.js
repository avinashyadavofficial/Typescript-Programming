var winston = require('winston');
//create logger
var logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ],
});
//this is syslog  levels shown below:
// {
//     emerg: 0,
//     alert: 1,
//     crit: 2,
//     error: 3,
//     warning: 4,
//     notice: 5,
//     info: 6,
//     debug: 7
//   }
winston.info("Info message"); //[winston] Attempt to write logs with no transports, which can increase memory usage: {"message":"Info message","level":"info"}
logger.warning("Warning message"); //{"level":"warning","message":"Warning message"}
logger.error("Error message"); //{"level":"error","message":"Error message"}
