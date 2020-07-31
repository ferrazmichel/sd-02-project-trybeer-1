const express = require('express');

const rescue = require('express-rescue');

const { sales } = require('../controllers');

const router = express.Router();

router.post('/checkout', rescue(sales.postSale));

module.exports = router;

