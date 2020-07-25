const bcrypt = require('bcrypt');

const checkString = async ({ string, hash }) => bcrypt.compare(string, hash);

module.exports = {
  checkString,
};
