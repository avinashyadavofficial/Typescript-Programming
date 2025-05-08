
const winston = require('winston');
const { combine, timestamp, json } = winston.format;

//create logger
const logger=winston.createLogger({
    levels:winston.config.syslog.levels,
    level:process.env.LOG_LEVEL || 'info',
    // format:combine(timestamp(), json()),
    format:combine(
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }),
        json()  
    ),
    transports:[
        new winston.transports.Console(),
    ],
});

logger.info("Info message");
logger.warning("Warning message");
logger.error("Error message");
// {"level":"info","message":"Info message","timestamp":"2025-05-08T06:23:03.773Z"}
// {"level":"warning","message":"Warning message","timestamp":"2025-05-08T06:23:03.775Z"}
// {"level":"error","message":"Error message","timestamp":"2025-05-08T06:23:03.776Z"}

//so now it would show after customizing timestamp :
// {"level":"info","message":"Info message","timestamp":"2025-05-08 11:56:16.680 AM"}
// {"level":"warning","message":"Warning message","timestamp":"2025-05-08 11:56:16.685 AM"}
// {"level":"error","message":"Error message","timestamp":"2025-05-08 11:56:16.685 AM"}


