/**
  * Response Time: This module creates a middleware that records the response time for requests in HTTP servers. The "response time" is defined here as the elapsed time from when a request enters this middleware to when the headers are written out to the client.
  * @ https://www.npmjs.com/package/response-time
  **/

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/src/utils/logger.js");

/* npm imports */
const responseTime = require("response-time");

module.exports = (app) => {
  consoleLogger("Initializing 'Response Time' middleware...");

  const config = {
    digits: 2,
    suffix: true
  };  
  app.use(responseTime(config));
};
