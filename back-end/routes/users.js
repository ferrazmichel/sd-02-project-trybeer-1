const express = require('express');

const rescue = require('express-rescue');

const { users } = require('../controllers');

const {
  userSchema: { loginSchema, registerSchema },
} = require('../services/utils/joinSchemas');

const { validate } = require('../middlewares');

const router = express.Router();

router.post('/login', validate(loginSchema), rescue(users.login));

router.post('/register', validate(registerSchema), rescue(users.register));

module.exports = router;
