const express = require('express');

const rescue = require('express-rescue');

const { users } = require('../controllers');

const {
  userSchema: {
    loginSchema, registerSchema, profileSchema
  },
} = require('../services/utils/joinSchemas');

const { validate, auth } = require('../middlewares');

const router = express.Router();

router.post('/login', validate(loginSchema), rescue(users.login));

router.post('/register', validate(registerSchema), rescue(users.register));

router
  .route('/profile')
  .get(auth, rescue(users.getUser))
  .put(auth, validate(profileSchema), rescue(users.putUser));


module.exports = router;
