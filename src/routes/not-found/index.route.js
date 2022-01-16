/**
  * Routes for 404 Page Not Found and the Good old 500 - Internal Server Error
  **/

let __base = global.approot;
let pageNotFound = require(__base + "/src/controllers/not-found/handlers/page-not-found.handler.js");
let internalError = require(__base + "/src/controllers/not-found/handlers/internal-server-error.handler.js");
let routesMiddlewares = require(__base + "/src/middleware/routes.middleware.js");

module.exports = (app) => {
  /* 404 */
  app.use(routesMiddlewares, (req, res, next) => {
    pageNotFound(req, res, next);
  });

  /* 500 */
  app.use(routesMiddlewares, (err, req, res, next) => {
    internalError(err, req, res, next);
  })
};
