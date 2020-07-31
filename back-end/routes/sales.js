const express = require('express');

const rescue = require('express-rescue');

const { sales } = require('../controllers');

const { auth } = require('../middlewares');

const router = express.Router();

router.post('/checkout', rescue(sales.postSale))

module.exports = router;

