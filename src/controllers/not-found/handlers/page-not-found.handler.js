/**
  * 404 Page Not Found
  * */

/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);
const buildPageNotFoundMeta = require('../service/page-not-found-meta');

module.exports = (req, res) => {
  consoleLogger('404 - Page Not Found. Oops!');

  /* initialize */
  const toTemplate = {};
  toTemplate.meta_tags = buildPageNotFoundMeta();
  toTemplate.csp_nonce = res.locals.nonceString;

  /* render */
  res.status(404);
  res.render('page-not-found/templates/index.html', toTemplate);
};
