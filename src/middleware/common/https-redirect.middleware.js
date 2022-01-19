/**
  * Ensures that your web application is redirected to HTTPS always. This help ensure
  * that users visiting your web application are given a secure mode.
  * */

/* npm and node imports */
const { redirectToHTTPS } = require('express-http-to-https');
require('dotenv').config();

/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);

module.exports = (app) => {
  consoleLogger('Initializing HTTP to HTTPS Redirect Loader (Not Applicable if Localhost)...');
  const arrayOfIgnoreHosts = [/localhost:(\d{4})/];
  const arrayOfIgnoreRoutes = [];
  const redirectCode = 301;
  app.use(redirectToHTTPS(arrayOfIgnoreHosts, arrayOfIgnoreRoutes, redirectCode));
};
