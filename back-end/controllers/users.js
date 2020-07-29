const Boom = require('@hapi/boom');

const { users } = require('../services');

const handleError = {
  existUser: () => {
    throw Boom.badRequest('Email already registered');
  },
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

const register = async (req, res) => {
  const { error } = await users.register(req.body);

  if (error) {
    handleError[error]();
  }

  res.status(201).json({ message: 'User created with sucess!', error: null });
};

const getUser = async (req, res) => {
  const user = await users.getUser(req.user);
  res.status(200).json(user);
};

const putUser = async (req, res) => {
  await users.putUser(req.body)
  res.status(200).json();
};

module.exports = {
  login,
  register,
  getUser,
  putUser,
};
