const express = require('express');
const {
  users,
} = require('../controllers');

const router = express.Router();

router
  .route('/')
  .get((req,res)=> res.send('test'))
  .post(users.login);

module.exports = router;
