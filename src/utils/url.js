/**
 * return the sandbox or production URL
 * @param {string} publicKey - Your public key.
 * @returns The base url for the public key
 */
const getUrl = (sandbox) => {
  const { BASE_URL_PROD, BASE_URL } = require('./constants');

  if (sandbox) {
    return BASE_URL;
  }
  return BASE_URL_PROD;
};

module.exports = getUrl;