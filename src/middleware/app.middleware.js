/* eslint global-require: 0 */
/**
  * entry point for all middlwares that will need to run on every
  * request made to the server
  * */

/* app middleware imports */
const middlewares = {
  httpsRedirect: require('./common/https-redirect.middleware'),
  responseTime: require('./common/response-time.middleware'),
  morganRequestLogger: require('./common/morgan-request-logger.middleware'),
  helmet: require('./common/helmet.middleware'),
  bodyParser: require('./common/body-parser.middleware'),
  appCompression: require('./common/compression.middleware'),
  appStaticConfig: require('./common/app-static.middleware'),
  ignoreDefaultFavicon: require('./common/ignore-default-favicon.middleware'),
  cookieParser: require('./common/cookie-parser.middleware'),
};

module.exports = (app) => {
  Object.keys(middlewares).forEach((routine) => {
    middlewares[routine](app);
  });
};
