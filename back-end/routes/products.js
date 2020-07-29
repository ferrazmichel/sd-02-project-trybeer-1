const express = require('express');

const rescue = require('express-rescue');

const { auth, products } = require('../controllers');

const router = express.Router();

router.get('/', auth, rescue(products.getAll));

module.exports = router;
