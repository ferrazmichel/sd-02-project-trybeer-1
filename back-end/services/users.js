const { users } = require('../models');

const {
  bcrypt: { checkString, createHash },
  jsonWebToken: { signToken },
} = require('./utils');

const login = async (body) => {
  const user = await users.find({ key: 'email', value: body.email });

  if (!user) {
    return { error: 'userNotFound', token: null };
  }

  const { password, ...userWithoutPassword } = user;

  const isCorrectPassword = await checkString({
    string: body.password,
    hash: password,
  });

  if (!isCorrectPassword) {
    return { error: 'wrongPassowrd', token: null };
  }

  const token = signToken(userWithoutPassword);

  return { error: null, token };
};

const register = async (body) => {
  const user = await users.find({ key: 'email', value: body.email });

  if (user) {
    return { error: 'existUser' };
  }

  const hash = await createHash(body.password);

  await users.register({ ...body, password: hash });

  return { error: null };
};

module.exports = {
  login,
  register,
};
