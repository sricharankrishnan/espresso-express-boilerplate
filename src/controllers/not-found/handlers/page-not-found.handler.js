/**
  * 404 Page Not Found
  **/

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const HandlerTemplate = require(__base + "/utils/handler-template.js");
const buildPageNotFoundMeta = require("../service/page-not-found-meta.js");

class Handler extends HandlerTemplate {
  constructor(req, res, next) {
    super(req, res);
    this.next = next;
  }

  /* entry */
  static main(req, res, next) {
    consoleLogger("404 - Page Not Found. Oops!");
    let handler = new Handler(req, res, next);
    handler.initialize();
  };

  /* start */
  initialize() {
    let $this = this;

    /* meta */
    $this.to_template["meta_tags"] = buildPageNotFoundMeta();
    $this.to_template["csp_nonce"] = $this.res.locals.nonceString;

    /* render */
    $this.res.status(404);
    $this.performRender("page-not-found/templates/index.html");
  };
};
module.exports = Handler.main;
