const { users } = require("../services");

function handleError(error) {
  if (error === "user-not-found") {
    throw Boom.badRequest("Usuário não existe");
  }

  if (error === "wrong-password") {
    throw Boom.badRequest("Senha incorreta");
  }
}

const login = async (req, res) => {
  const { error, token } = await users.login(req.body);

  if (error) {
    handleError(error);
  }

  res.status(200).json({ token, error: null });
};

module.exports = {
  login,
};
