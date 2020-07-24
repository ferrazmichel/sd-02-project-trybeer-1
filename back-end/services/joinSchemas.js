const Joi = require("@hapi/joi");

const confirm = Joi.string().valid(Joi.ref("password")).required();

const email = Joi.string().email().required();

const name = Joi.string()
  .regex(/^[^\s][a-zA-Z\s]*[a-zA-z]$/)
  .min(12)
  .required();

const password = Joi.number().min(6).required();

const role = Joi.string().required();

const userSchema = Joi.object({
  confirm,
  email,
  name,
  password,
  role,
}).unknown(false);

module.exports = {
  userSchema,
};
