/**
  * helps generate a randomized string as a 'Nonce' for aiding the
  * Content Security Policy of the application
  */

const nonce = require('nonce')();
const { v4: uuidv4 } = require('uuid');

module.exports = () => {
  const nonceString = String(nonce());
  const uuidString = String(uuidv4());
  return `${nonceString}-${uuidString}`;
};
