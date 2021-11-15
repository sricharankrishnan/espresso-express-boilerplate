/**
  * Ignore Default Favicon: useful incase you are experiencing the default express 
  * request to check for the favicon.ico for every request
  **/

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

module.exports = (app) => {
  consoleLogger("Ready to Ignore - 'favicon.ico'...");

  app.use((req, res, next) => {
    let {url} = req;
    if (url.indexOf("favicon.ico") !== -1) {
      return res.status(204).end();
    }
    else {
      next();
    }
  });
};
