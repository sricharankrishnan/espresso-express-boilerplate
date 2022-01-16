/**
  * home/root route
  **/

let __base = global.approot;
let app = require(__base + "/server.js");
let controller = require(__base + "/src/controllers/home/handlers/index.handler.js");
let routesMiddlewares = require(__base + "/src/middleware/routes.middleware.js");

module.exports = (app) => {
  app.get("/", routesMiddlewares, controller);
};

