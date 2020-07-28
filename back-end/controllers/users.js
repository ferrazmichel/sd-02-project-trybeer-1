const Boom = require('@hapi/boom');

const { users } = require('../services');

const handleError = {
  existUser: () => {
    throw Boom.badRequest('Email already registered');
  },
};

const register = async (req, res) => {
  const { error } = await users.register(req.body);

  if (error) {
    handleError[error]();
  }

  res.status(201).json({ message: 'User created with sucess!', error: null });
};

module.exports = {
  register,
};
