const Joi = require('@hapi/joi');
const joiDate = Joi.extend(require('@hapi/joi-date'));

const orderDate = joiDate.date().format('YYYY-MM-DD').utc().required().messages({
  'any.required': 'Date is required',
  'string.date': 'Date must be in date format',
  'string.empty': 'Date cannot be an empty field'
})

const totalPrice = Joi.number().positive().required().messages({
  'number.positive': 'Price must be a positive value',
  'any.required': 'Price is required',
  'number.base': 'Price must be a number',
  'number.empty': 'Price is not allowed to be empty',
});

const address = Joi.string()
  .max(100)
  .required()
  .messages({
    'any.required': 'Address is required',
    'string.base': 'Address must be a type of string',
    'string.empty': 'Address is not allowed to be empty',
    'string.max': 'Address length must be at maximum 100 characters long',
  });

const number = Joi.number().integer().positive().required().messages({
  'number.positive': 'Number must be a positive value',
  'any.required': 'Number is required',
  'number.base': 'Number must be a number',
  'number.empty': 'Number is not allowed to be empty',
  'number.integer': 'Number must be an integer',

});

// count, id

const products = Joi.array().required().messages({
  'number.empty': 'Products is not allowed to be empty',
  'any.required': 'Products is required',
  'number.base': 'Products must be a number',
});

const ordersSchema = Joi.object({
  orderDate,
  totalPrice,
  address,
  number,
  products,
}).unknown(false);

module.exports = {
  ordersSchema,
};
