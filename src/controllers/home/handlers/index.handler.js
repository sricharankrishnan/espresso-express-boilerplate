/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/src/utils/logger.js");
const HandlerTemplate = require(__base + "/src/utils/handler-template.js");
const setCookie = require(__base + "/src/utils/app-cookie-builder.js")();
const sampleService = require("../service/sample.service.js");

class Handler extends HandlerTemplate {
  constructor(req, res) {
    super(req, res);
  }

  /* entry */
  static main(req, res) {
    consoleLogger("Home Page - initializing.");
    let handler = new Handler(req, res);
    handler.initialize();
  };

  /* start */
  initialize() {
    let $this = this;

    /* meta */
    $this.to_template["meta_tags"] = sampleService();
    $this.to_template["csp_nonce"] = $this.res.locals.nonceString;

    /* render */
    $this.performRender("home/templates/index.html");
  };
};
module.exports = Handler.main;
