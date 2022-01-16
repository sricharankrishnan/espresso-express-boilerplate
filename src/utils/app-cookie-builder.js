/**
  * initializes the cookie builder process for the app. ideally this 
  * should be used when you would like to send cookies to the client side. Helps to 
  * build Unsigned and Signed cookies 
  **/
/* app imports */
const __base = global.approot;
const consoleLogger = require("./logger.js");

/* npm imports */
require("dotenv").config();

module.exports = (app) => {
  let {NODE_ENV} = process.env; 
  
  /* always the default configuration. you can change this to suit your preference */
  const oneHourInMilliseconds = 3600000;
  let defaultCookieConfig = {
    httpOnly: false,
    maxAge: 1 * oneHourInMilliseconds,
    path: "/",
    secure: NODE_ENV === "development" ? false : true,
    signed: false,
    sameSite: "strict"
  };

  return (res, props) => {
    let {cookieName, cookieValue, cookieOptions} = props;
    let errorText;
    
    if (typeof cookieName !== "string") {
      errorText = "App Cookie Setter: 'cookieName' is not of 'string' type";
      consoleLogger(errorText);
      throw new Error(errorText);
    }
    else if (!cookieValue) {
      errorText = "App Cookie Setter: 'cookieValue' seems to be missing. Check!?";
      consoleLogger(errorText);
      throw new Error(errorText);
    }
    else {
      /* create a fresh clone of the existing default config for cookies */
      let config = Object.assign({}, defaultCookieConfig);

      /* if you have cookie options, then merge the values with the config object */
      if (Object.prototype.toString.call(cookieOptions) === "[object Object]"
          && Object.keys(cookieOptions).length > 0 
          && cookieOptions.constructor === Object) {

        for (let prop in cookieOptions) {
          if (cookieOptions.hasOwnProperty(prop)) {
            config[prop] = cookieOptions[prop];
          }
        }
      }

      console.log(config);

      /* set the cookie as required */
      res.cookie(cookieName, cookieValue, config);
    }
  };
};
