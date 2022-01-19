/**
  * Specific Configuration for Body Parser middleware
  * [Source: https://www.npmjs.com/package/body-parser];
  * */
/* npm imports */
const bodyParser = require('body-parser');

/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);

module.exports = (app) => {
  /**
    * If you wish to make changes or opt out of one of the parser options, you could go ahead
    * and either remove or comment it out
    * */

  consoleLogger("Initializing 'Body-Parser' middleware...");
  /* 1. body parser Cotent-Type: application/json */
  app.use(bodyParser.json({ type: 'application/json', strict: true }));
  /* 2. body parser Content-Type: application/x-www-form-urlencoded */
  app.use(bodyParser.urlencoded({ extended: false }));
  /* 3. body parser Content-Type: text/plain */
  app.use(bodyParser.text());
  /* 4. body parser Content-Type: application/octet-stream */
  app.use(bodyParser.raw());
};
