/* app imports */
const appMiddlewares = require('../middleware/app.middleware');

/* routes imports */
const home = require('./home/index.route');
const notFound = require('./not-found/index.route');

/* list and invoke all routes from this point */
module.exports = (app) => {
  appMiddlewares(app);
  home(app);
  notFound(app);
};
