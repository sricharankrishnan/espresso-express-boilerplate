/**
  * Routes for 404 Page Not Found and the Good old 500 - Internal Server Error
  **/

const __base = global.approot;
const pageNotFound = require(__base + "/src/controllers/not-found/handlers/page-not-found.handler.js");
const internalError = require(__base + "/src/controllers/not-found/handlers/internal-server-error.handler.js");

module.exports = (app) => {
  /* 404 */
  app.use((req, res, next) => {
    pageNotFound(req, res, next);
  });

  /* 500 */
  app.use((err, req, res, next) => {
    internalError(err, req, res, next);
  })
};
