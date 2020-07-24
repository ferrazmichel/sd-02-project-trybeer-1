const bcrypt = require("bcrypt");

async function createHash(element) {
  const saltRounds = 10;
  return bcrypt.hash(element, saltRounds);
}

module.exports = {
  createHash,
};
