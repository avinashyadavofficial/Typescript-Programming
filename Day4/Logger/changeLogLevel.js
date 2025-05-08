var winston = require('winston');
var logLevels;
(function (logLevels) {
    logLevels["fatal"] = "fatal";
    logLevels["error"] = "error";
    logLevels["warn"] = "warn";
    logLevels["info"] = "info";
    logLevels["debug"] = "debug";
    logLevels["trace"] = "trace";
    logLevels["avinash"] = "avinash";
})(logLevels || (logLevels = {}));
;
//create logger
var logger = winston.createLogger({
    levels: logLevels,
    level: process.env.LOG_LEVEL || 'avinash', //// log everything from 'avinash' and above
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ level: process.env.LOG_LEVEL || 'avinash' }),
    ],
});
logger.trace("Trace message"); //{"level":"trace","message":"Trace message"}
logger.info("Info message"); //{"message":"Info message","level":"info"}
logger.warn("Warning message"); //{"level":"warn","message":"Warning message"}
logger.error("Error message"); //{"level":"error","message":"Error message"}
logger.avinash("Avinash messsage"); //{"level":"avinash","message":"Avinash messsage"}
