/* npm imports */
const path = require("path");
const minifyHtml = require("express-minify-html");
const express = require("express");

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

/**
  * this file helps to serve all the static file requirements for the web app
  * all the way from images, html, stylesheets etc...
  */
module.exports = (app) => {
  consoleLogger("Configuring App Static Files...");
  
  /* paths */
  let htmlFilePath = path.join(__base + "/src/static/views");
  let cssFilePath = path.join(__base + "/src/static/css");
  let jsFilePath = path.join(__base + "/src/static/scripts");
  let assetsFilePath = path.join(__base + "/src/static/assets");
  let publicFilesPath = path.join(__base + "/src/public");
  
  /* set the app routes and paths for serving the static files */
  app.set("views", htmlFilePath);
  app.use("/styles", express.static(cssFilePath));
  app.use("/scripts", express.static(jsFilePath));
  app.use("/assets", express.static(assetsFilePath));
  app.use(express.static(publicFilesPath));
  app.disable("x-powered-by");
  
  /* helps to minify html files when being used with ejs templating for this app */
  app.use(minifyHtml({
    override: true,
    htmlMinifier: {
      removeEmptyAttributes: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    }
  }));
};
