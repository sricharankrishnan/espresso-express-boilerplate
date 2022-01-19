/**
  * Configure the Templating Engine for your app
  * */

/* npm imports */
const ejs = require('ejs');

/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);

module.exports = (app) => {
  consoleLogger('Initializing EJS Templating Engine...');
  app.set('view engine', 'ejs');
  app.engine('html', ejs.renderFile);
};
