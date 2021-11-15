/**
  * Morgan Request Logger: HTTP request logger middleware for node.js
  * @ https://www.npmjs.com/package/morgan
  **/

/* npm imports */
let morgan = require('morgan');
require("dotenv").config();

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const rotatingFileStreamLoader = require(__base + "/src/loaders/rfs.loader.js");

const appMorganLogger = (app) => {
  consoleLogger("Initializing 'NPM Morgan HTTP Request Logger' middleware...");

  /* config */
  let morganConfig = {
    stream: rotatingFileStreamLoader()
  };
  
  /* helps to customize the output for the app. if you know how to use morgan,
     then you would be able to see that you can make adjustments to this process as needed or
     use one of the pre-existing options */
  let morganCustomizer = (tokens, req, res) => {
    let arrayOfTokens = [
      "Method: " + tokens.method(req, res) + "|",
      "URL: " + tokens.url(req, res) + "|",
      "Status: " + tokens.status(req, res) + "|",
      "Remote Address: " + tokens["remote-addr"](req, res) + "|",
      "Date: " + tokens.date(req, res) + "|",
      "Http Version: " + tokens["http-version"](req, res) + "|"
    ];

    let logString = arrayOfTokens.join("");
    consoleLogger(logString);

    return logString;
  }

  app.use(morgan(morganCustomizer, morganConfig));
};
module.exports = appMorganLogger;
