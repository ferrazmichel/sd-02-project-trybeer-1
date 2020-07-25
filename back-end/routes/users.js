const express = require('express');

const rescue = require('express-rescue');

const { users } = require('../controllers');

const {
  userSchema: { loginSchema },
} = require('../services/utils/joinSchemas');

const { validate } = require('../middlewares');

const router = express.Router();

router.post('/login', validate(loginSchema), rescue(users.login));

module.exports = router;
