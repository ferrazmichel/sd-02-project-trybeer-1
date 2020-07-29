const express = require('express');

const rescue = require('express-rescue');

const { products } = require('../controllers');

const router = express.Router();

router.get('/', rescue(products.getAll));

module.exports = router;