const { users } = require("../services");

function handleError(error) {
  if (error === "exist-user") {
    throw Boom.badRequest("Email já cadastrado");
  }
}

const register = async (req, res) => {
  const { error } = await users.register(req.body);

  if (error) {
    handleError(error);
  }

  res.status(201).json({ message: "User created with sucess!", error: null });
};

module.exports = {
  register,
};
