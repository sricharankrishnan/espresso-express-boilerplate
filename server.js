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
let consoleLogger = require(__base + "/utils/logger.js");
let {PORT} = process.env;
let appLoaders = require(__base + "/src/loaders/index.loader.js");
let routes = require(__base + "/src/routes/index.route.js");
let clusterHandler = require(__base + "/utils/cluster-handler.js");

class App {
  constructor() {
    this.app = express();
  }

  /* things start here */
  static main() {
    new App().init();
  }

  /* ok here we go! */
  init() {
    let $this = this;
    $this.appClustering();
    clusterHandler(cluster);
  }

  appClustering() {
    let $this = this;

    /* Espresso targets all possible processors on a server, since node js is single threaded. 
       Maximizing efficiency with Node Js Cluster Module [Works on production mode to keep the logging simple and easy] */
    if (cluster.isMaster && process.env.NODE_ENV === "production") {
      this.master();
    }
    else {
      this.worker();
    }
  }

  /* initializes all workers based on the number of processors */
  master() {
    let $this = this;

    os.cpus().forEach((item) => {
      cluster.fork();
    });
  }

  /* the worker that gets created by the master */
  worker() {
    let $this = this;
    
    /* app loaders */
    appLoaders($this.app);
    /* app routes */
    routes($this.app);

    /* start the server */
    $this.app.listen(PORT, function() {
      consoleLogger("App running @ http://localhost:" + PORT + ". Press CTRL + C to Terminate.");
    });
  }
}
App.main();
