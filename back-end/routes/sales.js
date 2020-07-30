const express = require('express');

const rescue = require('express-rescue');

const { sales } = require('../controllers');

const { auth } = require('../middlewares');

const router = express.Router();

router
  .route('/checkout')
  .post(auth, rescue(sales.postSale))

module.exports = router;
