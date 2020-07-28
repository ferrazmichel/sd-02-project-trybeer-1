const { users } = require('../models');

const {
  bcrypt: { createHash },
} = require('./utils');

const register = async (body) => {
  try {
    const user = await users.find({ key: 'email', value: body.email });

    if (user) {
      return { error: 'existUser' };
    }

    const hash = await createHash(body.password);

    await users.register({ ...body, password: hash });

    return { error: null };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  register,
};
