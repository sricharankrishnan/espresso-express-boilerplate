/**
  * middlewares that will be called when placed with route handlers
  * in the application
  * */

const removeTrailingSlash = require('./routes-middleware/remove-trailing-slash.middleware');

module.exports = [
  removeTrailingSlash,
];
