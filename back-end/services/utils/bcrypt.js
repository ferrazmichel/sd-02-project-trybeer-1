const bcrypt = require('bcrypt');

const createHash = async (string) => {
  const saltRounds = 10;
  return bcrypt.hash(string, saltRounds);
};

module.exports = {
  createHash,
};
