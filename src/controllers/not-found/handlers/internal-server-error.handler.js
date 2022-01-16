/**
  * 500 Internal Server Error
  **/

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/src/utils/logger.js");
const HandlerTemplate = require(__base + "/src/utils/handler-template.js");
const buildInternalErrorMeta = require("../service/internal-server-error-meta.js");

class Handler extends HandlerTemplate {
  constructor(err, req, res, next) {
    super(req, res);
    this.err = err;
    this.next = next;
  }

  /* entry */
  static main(err, req, res, next) {
    consoleLogger("500 - Internal Server Error. Oh My Gawd!");
    let handler = new Handler(err, req, res, next);
    handler.initialize();
  };

  /* start */
  initialize() {
    let $this = this;
    /* std out the error message */
    $this.printErrorMessage();

    /* meta */
    $this.to_template["meta_tags"] = buildInternalErrorMeta();
    $this.to_template["csp_nonce"] = $this.res.locals.nonceString;

    /* render */
    $this.res.status(500);
    $this.performRender("internal-server-error/templates/index.html");
  };

  printErrorMessage() {
    let $this = this; 
    consoleLogger("Someting went wrong!");
    consoleLogger($this.err);
  };
};
module.exports = Handler.main;
