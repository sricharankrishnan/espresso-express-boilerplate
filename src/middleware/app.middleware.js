/**
  * entry point for all middlwares that will need to run on every 
  * request made to the server 
  **/

/* app middleware imports */
const middlewares = {
  httpsRedirect: require("./common/https-redirect.middleware.js"),
  responseTime: require("./common/response-time.middleware.js"),
  morganRequestLogger: require("./common/morgan-request-logger.middleware.js"),
  helmet: require("./common/helmet.middleware.js"),
  bodyParser: require("./common/body-parser.middleware.js"),
  appCompression: require("./common/compression.middleware.js"),
  appStaticConfig: require("./common/app-static.middleware.js"),
  ignoreDefaultFavicon: require("./common/ignore-default-favicon.middleware.js"),
  cookieParser: require("./common/cookie-parser.middleware.js"),
};

module.exports = (app) => {
  Object.keys(middlewares).forEach((routine) => {
    middlewares[routine](app);
  });
};
