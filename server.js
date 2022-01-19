/**
 * Welcome to Espresso
 *--------------------
 * Espresso -  Express Boiler Plate (open source) is a scaffold built with ExpressJS to help
 * developers get a quick start in building web application and web apis. The boiler plates
 * comes with certain predefined NPM Packages and a structured approach to building applications.
 * -------------------
 * Author: Sricharan Krishnan @ https://github.com/sricharankrishnan
 * -------------------
 * */

/* establish an approot */
global.approot = __dirname;

/* node js and npm imports */
const cluster = require("cluster");
const os = require("os");

const __base = global.approot;
const express = require("express");
require("dotenv").config();

/* app imports */
const consoleLogger = require(`${__base}/src/utils/logger.js`);
const { PORT } = process.env;
const appRoutes = require(`${__base}/src/routes/index.route.js`);
const appClusterHandler = require(`${__base}/src/utils/cluster-handler.js`);
const appTemplatingEngineLoader = require(`${__base}/src/loaders/app-templating-engine.loader.js`);

function appCentral() {
  /* node js clusters for performance */
  if (cluster.isMaster && process.env.NODE_ENV === "production") {
    os.cpus().forEach((item) => {
      consoleLogger(`Creating Forks from: ${item.model}`);
      cluster.fork();
    });

    /* start off the handler for clusters and their events */
    appClusterHandler(cluster);
  } else {
    /* if the instance is a child worker, then will activate these */
    const app = express();
    appTemplatingEngineLoader(app);
    appRoutes(app);

    /* start the server */
    app.listen(PORT, () => {
      consoleLogger(`App running @ http://localhost:${PORT}. Press CTRL + C to Terminate.`);
    });
  }
}
appCentral();
