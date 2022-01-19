/* eslint no-console: 0 */
/* standardized logger file for console outputs */

/* npm imports */
require('dotenv').config();

/* app imports */
const __base = global.approot;
const rotatingFileStreamLoader = require(`${__base}/src/loaders/rfs.loader.js`);

const consoleLogger = (message, shouldWriteToLogFile = false) => {
  const { APP_CONSOLE, NODE_ENV } = process.env;
  console.log(`${APP_CONSOLE}/[Mode: ${NODE_ENV.toUpperCase()}]`, message);

  /* uses the rfs stream instance that is created when invoked to write the log */
  if (shouldWriteToLogFile) {
    rotatingFileStreamLoader().write(`${message}\n`);
  }
};
module.exports = consoleLogger;
