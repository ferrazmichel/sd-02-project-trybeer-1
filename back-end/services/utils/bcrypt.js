const bcrypt = require('bcrypt');

async function createHash(string) {
  const saltRounds = 10;
  return bcrypt.hash(string, saltRounds);
}

module.exports = {
  createHash,
};
