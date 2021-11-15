/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

module.exports = () => {
  consoleLogger("Building meta details...");

  let meta = {
    title_tag: "Espresso - The Express Boilerplate. Clone. Install. Code.",
    description: "Espresso - Express Boiler Plate (open source) is a scaffold built with ExpressJS to help developers get a quick start in building web application and web apis. The boiler plates comes with certain predefined NPM Packages and a structured approach to building applications.",
    canonical_url: ""
  };
  return meta;
};
