/**
  * home/root route
  * */

const __base = global.approot;
const controller = require(`${__base}/src/controllers/home/handlers/index.handler.js`);
const routesMiddlewares = require(`${__base}/src/middleware/routes.middleware.js`);

module.exports = (app) => {
  app.get('/', routesMiddlewares, controller);
};
