const Boom = require("@hapi/boom");

const { users } = require("../models");

const { verifyToken } = require("../service/utils/jsonWebToken");

async function auth(req, _res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw Boom.badRequest("Token não encontrado ou informado");
    }

    const decoded = verifyToken(token);

    const user = await users.find({ key: "email", value: decoded.data.email });

    if (!user) {
      throw Boom.unauthorized("Erro ao procurar usuario referente ao token.");
    }

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = auth;
