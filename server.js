/**
  * Welcome to Espresso
  *--------------------
  * Espresso -  Express Boiler Plate (open source) is a scaffold built with ExpressJS to help developers get a quick start 
  * in building web application and web apis. The boiler plates comes with certain predefined NPM Packages and a structured 
  * approach to building applications.
  * -------------------
  * Author: Sricharan Krishnan @ https://github.com/sricharankrishnan
  * -------------------
  **/

/* establish an approot */
global.approot = __dirname;

/* node js and npm imports */
let cluster = require("cluster");
let os = require("os");
let __base = global.approot;
let express = require("express");
require("dotenv").config();

/* app imports */
let consoleLogger = require(__base + "/src/utils/logger.js");
let {PORT} = process.env;
let appRoutes = require(__base + "/src/routes/index.route.js");
let appClusterHandler = require(__base + "/src/utils/cluster-handler.js");
let appTemplatingEngineLoader = require(__base + "/src/loaders/app-templating-engine.loader.js");

function appCentral() {
  let app = express();
  
  /* improving app performance with node clusters. if master then will spawn 
     child workers */
  if (cluster.isMaster && process.env.NODE_ENV === "production") {
    os.cpus().forEach((item) => {
      cluster.fork();
    });
  }
  /* if the instance is a child worker, then will activate these */
  else {
    appTemplatingEngineLoader(app);
    appRoutes(app);
  }
    
  //appClusterHandler(cluster);
  
  /* start the server */
  app.listen(PORT, function() {
    consoleLogger("App running @ http://localhost:" + PORT + ". Press CTRL + C to Terminate.");
  });
}
appCentral();
