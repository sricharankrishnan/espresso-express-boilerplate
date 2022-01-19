/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);
const sampleService = require('../service/sample.service');

module.exports = (req, res) => {
  consoleLogger('Home Page - initializing.');

  /* initialize */
  const toTemplate = {};
  toTemplate.meta_tags = sampleService();
  toTemplate.csp_nonce = res.locals.nonceString;

  /* render */
  res.render('home/templates/index.html', toTemplate);
};
