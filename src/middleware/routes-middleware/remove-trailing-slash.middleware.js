/**
  * helps to remove the trailing slash for web app urls and 
  * thus will help standardize the url pattern for all pages
  **/

module.exports = (req, res, next) => {
  let pathUrl = req.path;
  let len = pathUrl.length;

  /* check the end of the string value, if there is a trailing slash, then will remove it
     and redirect with a 301 perma redirect status to without trailing slash */
  if (pathUrl.substr(-1) == '/' && len > 1) {
    let query = req.url.slice(len)
    res.redirect(301, req.path.slice(0, -1) + query)
  } else {
  /* if you are here, it means this is fine, will proceed with the rest of the business logic */
    next();
  }
}
