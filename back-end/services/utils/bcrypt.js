const bcrypt = require('bcrypt');

<<<<<<< HEAD
const checkString = async ({ string, hash }) => bcrypt.compare(string, hash);

module.exports = {
  checkString,
=======
const createHash = async (string) => {
  const saltRounds = 10;
  return bcrypt.hash(string, saltRounds);
};

module.exports = {
  createHash,
>>>>>>> master
};
