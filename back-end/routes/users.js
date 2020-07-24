const express = require('express');

const rescue = require('express-rescue');

const { users } = require('../controllers');

const { userSchema } = require('../services/utils/joinSchemas');

const { validate } = require('../middlewares');

const router = express.Router();

router.post('/', validate(userSchema), rescue(users.register));

module.exports = router;
