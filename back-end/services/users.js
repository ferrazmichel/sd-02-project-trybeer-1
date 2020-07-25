const { users } = require('../models');

const {
  bcrypt: { checkString },
  jsonWebToken: { signToken },
} = require('./utils');

const login = async (body) => {
  try {
    const user = await users.find({ key: 'email', value: body.email });

    if (!user) {
      return { error: 'user-not-found', token: null };
    }

    const { password, ...userWithoutPassword } = user;

    const isCorrectPassword = await checkString({
      string: body.password,
      hash: password,
    });

    if (!isCorrectPassword) {
      return { error: 'wrong-password', token: null };
    }

    const token = signToken(userWithoutPassword);

    return { error: null, token };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  login,
};
