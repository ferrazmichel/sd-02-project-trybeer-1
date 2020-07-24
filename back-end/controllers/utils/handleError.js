const Boom = require("@hapi/boom");

function handleError(error) {
  if (error === "exist-user") {
    throw Boom.badRequest("Email já cadastrado");
  }
}

module.exports = handleError;
