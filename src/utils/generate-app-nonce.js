/**
  * helps generate a randomized string as a 'Nonce' for aiding the 
  * Content Security Policy of the application
  */

let nonce = require("nonce")();
let { v4: uuidv4 } = require("uuid");

module.exports = () => {
  let nonceString = String(nonce());
  let uuidString = String(uuidv4());
  return `${nonceString}-${uuidString}`;
};
