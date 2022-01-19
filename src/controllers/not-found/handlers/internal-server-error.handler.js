/* eslint no-unused-vars: 0 */
/**
  * 500 Internal Server Error
  * */

/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);
const buildInternalErrorMeta = require('../service/internal-server-error-meta');

module.exports = (err, req, res, next) => {
  consoleLogger('500 - Internal Server Error. Oh My Gawd!');
  consoleLogger(err);

  /* initialize */
  const toTemplate = {};
  toTemplate.meta_tags = buildInternalErrorMeta();
  toTemplate.csp_nonce = res.locals.nonceString;

  /* render */
  res.status(500);
  res.render('internal-server-error/templates/index.html', toTemplate);
};
