const Joi = require('@hapi/joi');

const email = Joi.string().email().required().messages({
  'any.required': 'Email is required',
  'string.base': 'Email must be a type of string',
  'string.email': 'Email must be in a format <name>@<domain>',
  'string.empty': 'Email is not allowed to be empty',
});

const password = Joi.string()
  .pattern(/^.*(.*\d){6,}/)
  .required()
  .messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a type of string',
    'string.empty': 'Password is not allowed to be empty',
    'string.pattern.base': 'Password must contain at least 6 numbers',
  });

const loginSchema = Joi.object({
  email,
  password,
}).unknown(false);

module.exports = {
  loginSchema,
};
