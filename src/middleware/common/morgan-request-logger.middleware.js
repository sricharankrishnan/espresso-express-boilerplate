/**
  * Morgan Request Logger: HTTP request logger middleware for node.js
  * @ https://www.npmjs.com/package/morgan
  * */

/* npm imports */
const morgan = require('morgan');
require('dotenv').config();

/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);
const rotatingFileStreamLoader = require(`${__base}/src/loaders/rfs.loader.js`);

const appMorganLogger = (app) => {
  consoleLogger("Initializing 'NPM Morgan HTTP Request Logger' middleware...");

  /* config */
  const morganConfig = {
    stream: rotatingFileStreamLoader(),
  };

  /* helps to customize the output for the app. if you know how to use morgan,
     then you would be able to see that you can make adjustments to this process as needed or
     use one of the pre-existing options */
  const morganCustomizer = (tokens, req, res) => {
    const arrayOfTokens = [
      `Method: ${tokens.method(req, res)}|`,
      `URL: ${tokens.url(req, res)}|`,
      `Status: ${tokens.status(req, res)}|`,
      `Remote Address: ${tokens['remote-addr'](req, res)}|`,
      `Date: ${tokens.date(req, res)}|`,
      `Http Version: ${tokens['http-version'](req, res)}|`,
    ];

    const logString = arrayOfTokens.join('');
    consoleLogger(logString);

    return logString;
  };

  app.use(morgan(morganCustomizer, morganConfig));
};
module.exports = appMorganLogger;
