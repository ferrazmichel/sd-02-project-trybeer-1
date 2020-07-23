const express = require('express');
const {
  users,
} = require('../controllers');

const router = express.Router();

router
  .route('/')
  .post(users.login);

module.exports = router;
