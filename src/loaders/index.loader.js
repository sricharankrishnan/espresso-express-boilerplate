/**
  * Central Point of calling all loaders for this applcation
  **/

/* loaders */
let httpsRedirectLoader = require("./https-redirect.loader.js");
let helmetLoader = require("./helmet.loader.js");
let bodyParserLoader = require("./body-parser.loader.js");
let appLoaders = require("./app.loader.js");
let compressionLoader = require("./compression.loader.js");
let ignoreDefaultFavicon = require("./ignore-default-favicon.loader.js");
let responseTimeLoader = require("./response-time.loader.js");
let cookieParserLoader = require("./cookie-parser.loader.js");
let morganRequestLogger = require("./morgan-request-logger.loader.js");
let appTemplatingEngineLoader = require("./app-templating-engine.loader.js");

module.exports = (app) => {
  /* try not to change the order of the loaders */
  httpsRedirectLoader(app);
  responseTimeLoader(app);
  ignoreDefaultFavicon(app);
  helmetLoader(app);
  compressionLoader(app);
  bodyParserLoader(app);
  cookieParserLoader(app);
  morganRequestLogger(app);
  appTemplatingEngineLoader(app);
  appLoaders(app);
};
