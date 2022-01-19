/* app imports */
const __base = global.approot;
const consoleLogger = require(`${__base}/src/utils/logger.js`);

module.exports = () => {
  consoleLogger('Building meta details...');

  const meta = {
    title_tag: 'Espresso Boiler Plate - (404) Page Not Found',
    description: 'The link you followed is either outdated, inaccurate or the server has been instructed not to let you have it. Page Not Found on the server',
    canonical_url: '',
  };
  return meta;
};
