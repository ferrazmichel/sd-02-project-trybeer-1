const bcrypt = require("bcrypt");

async function checkString({ string, hash }) {
  return bcrypt.compare(string, hash);
}

module.exports = {
  checkString,
};
