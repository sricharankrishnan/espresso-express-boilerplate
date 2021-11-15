/* app imports */
const __base = global.approot;
const removeTrailingSlashMiddleware = require("../middleware/remove-trailing-slash.middleware.js");

/* routes imports */
const home = require("./home/index.route.js");
const notFound = require("./not-found/index.route.js");

/* list and invoke all routes from this point */
module.exports = (app) => {
  removeTrailingSlashMiddleware(app);
  home(app);
  notFound(app);
};
