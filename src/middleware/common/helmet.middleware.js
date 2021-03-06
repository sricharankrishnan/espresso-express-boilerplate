/**
  * Helmet @ https://www.npmjs.com/package/helmet
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver
  * bullet but it can surely help!
  * */

/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);
const { EXPECT_CT_REPORT_URI } = process.env;
const nonceGenerator = require(`${__base}/src/utils/generate-app-nonce.js`);

/* npm imports */
const helmet = require('helmet');

module.exports = (app) => {
  consoleLogger("Initializing 'NPM Helmet' middleware...");
  /** #1. Sets "X-DNS-Prefetch-Control: off" */
  app.use(helmet.dnsPrefetchControl({ allow: false }));

  /** #2. Compliance with Google's Certificate Transparency. Setting the stage here. */
  const expectCtConfig = { maxAge: 86400 };
  if (EXPECT_CT_REPORT_URI) expectCtConfig.reportUri = EXPECT_CT_REPORT_URI;
  app.use(helmet.expectCt(expectCtConfig));

  /** #3. Prevent ClickJacking Attacks. Sets "X-Frame-Options: DENY" */
  app.use(helmet.frameguard({ action: 'deny' }));

  /** #4. Removes the X-Powered-By header if it was set. */
  app.use(helmet.hidePoweredBy());

  /** #5. Handles the Strict-Transport-Security header and helps in registering for HSTS */
  app.use(helmet.hsts({ maxAge: 63072000, includeSubDomains: true, preload: true }));

  /** #6. The Internet Explorer >8 X-Download-Options header */
  app.use(helmet.ieNoOpen());

  /** #7. MIME Sniffing Off - X-Content-Type-Options: nosniff */
  app.use(helmet.noSniff());

  /** #8. X-Permitted-Cross-Domain-Policies: especially to handle PDF and other Adode Flash Related
   * Products */
  app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'none' }));

  /** #9. Referrer-Policy: no-referrer */
  app.use(helmet.referrerPolicy({ policy: ['no-referrer', 'same-origin', 'strict-origin-when-cross-origin'] }));

  /** #10. Sets "X-XSS-Protection: 0" - which is adviced. Focus on using Content Security Policy
   * instead */
  app.use(helmet.xssFilter());

  /** #11. Sets the required configuration for Content-Security-Policy */
  const noncer = (req, res) => {
    const nonceString = nonceGenerator();
    res.locals.nonceString = nonceString;
    return `'nonce-${nonceString}'`;
  };
  const cspConfig = {
    useDefaults: true,
    directives: {
      'script-src': ['http://localhost:4500', 'https://ajax.googleapis.com', noncer],
      'img-src': ['http://localhost:4500', 'https://img.shields.io'],
    },
  };
  app.use(helmet.contentSecurityPolicy(cspConfig));

  /** #12. Sets "Cross-Origin-Opener-Policy: same-origin" to prevent attacks like Spectre */
  app.use(helmet.crossOriginOpenerPolicy());

  /** #13. Sets "Cross-Origin-Embedder-Policy: require-corp" */
  app.use(helmet.crossOriginEmbedderPolicy());
  /* As of 2021, you can choose to opt out of this feature as this might break your app. If there is
   * a report only mode available, you can choose to use that */
};
