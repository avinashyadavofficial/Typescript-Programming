
const winston = require('winston');

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
    avinash:6
  };
//create logger
const logger=winston.createLogger({
    levels:logLevels,
    level:process.env.LOG_LEVEL || 'avinash',//// log everything from 'avinash' and above
    format:winston.format.json(),
    transports:[
        new winston.transports.Console(),
    ],
});
logger.trace("Trace message");//{"level":"trace","message":"Trace message"}
winston.info("Info message");//[winston] Attempt to write logs with no transports, which can increase memory usage: {"message":"Info message","level":"info"}
logger.warn("Warning message");//{"level":"warn","message":"Warning message"}
logger.error("Error message");//{"level":"error","message":"Error message"}
logger.avinash("Avinash messsage");//{"level":"avinash","message":"Avinash messsage"}




