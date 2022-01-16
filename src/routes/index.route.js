/* app imports */
const __base = global.approot;
const appMiddlewares = require("../middleware/app.middleware.js");

/* routes imports */
const home = require("./home/index.route.js");
const notFound = require("./not-found/index.route.js");

/* list and invoke all routes from this point */
module.exports = (app) => {
  appMiddlewares(app);
  home(app);
  notFound(app);
};
