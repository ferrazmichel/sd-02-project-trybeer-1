const Boom = require('@hapi/boom');

const { users } = require('../services');

const handleError = {
  userNotFound: () => {
    throw Boom.badRequest('User not exists');
  },
  wrongPassowrd: () => {
    throw Boom.badRequest('Wrong Password');
  },
};

const login = async (req, res) => {
  const { error, token } = await users.login(req.body);

  if (error) {
    handleError[error]();
  }

  res.status(200).json({ token, error: null });
};

module.exports = {
  login,
};
