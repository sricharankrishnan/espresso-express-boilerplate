/**
  * Cookie Parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
  * @ https://www.npmjs.com/package/cookie-parser
  **/

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

/* npm imports */
const cookieParser = require('cookie-parser');
require("dotenv").config();

module.exports = (app) => {
  consoleLogger("Initializing 'Cookie Parser' middleware...");
  let cookieSecret = process.env.APP_COOKIE_SECRET;
  app.use(cookieParser(cookieSecret));
};
