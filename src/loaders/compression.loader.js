/**
  * Compression Loader: helps take care of improving the performance of the application 
  * by adopting required compression of payloads.
  * [Source: https://www.digitalocean.com/community/tutorials/nodejs-compression, https://www.npmjs.com/package/compression]
  **/

/* npm imports */
const compression = require("compression");

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

module.exports = (app) => {
  consoleLogger("Initializing 'Compression' middleware...");
  const config = {
    level: 7,
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        /* don't compress responses with this request header */
        return false
      }

      /* fallback to standard filter function */
      return compression.filter(req, res)
    }
  };
  app.use(compression(config));
};
