const { users } = require("../models");

const { createHash } = require("./utils/bcrypt");

async function register(body) {
  try {
    const user = await users.find({ email: body.email });

    if (user) {
      return { error: "exist-user" };
    }

    const hash = await createHash(body.password);

    await users.create({ ...body, password: hash });

    return { error: null };
  } catch (err) {
    throw err;
  }
}

module.exports = {
  register,
};
