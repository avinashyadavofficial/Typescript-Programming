
const winston = require('winston');
//create logger
const logger=winston.createLogger({
    level:"info",
    format:winston.format.json(),
    transports:[
        new winston.transports.Console(),
    ],
});

logger.info("Info message");
logger.warn("Warning message");
logger.error("Error message");

// {"level":"info","message":"Info message"}
// {"level":"warn","message":"Warning message"}
// {"level":"error","message":"Error message"}

