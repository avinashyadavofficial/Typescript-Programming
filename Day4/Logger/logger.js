"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var winston = require('winston');
//create logger
var logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    timeStamp: console_1.timeStamp,
    transports: [
        new winston.transports.Console(),
    ],
});
logger.info("Info message");
logger.warn("Warning message");
logger.error("Error message");
// {"level":"info","message":"Info message"}
// {"level":"warn","message":"Warning message"}
// {"level":"error","message":"Error message"}
