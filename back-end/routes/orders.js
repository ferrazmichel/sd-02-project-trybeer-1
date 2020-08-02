const express = require('express');

const rescue = require('express-rescue');

const { orders } = require('../controllers');

const router = express.Router();

router.get('/', rescue(orders.list));

router.post('/', rescue(orders.insert));

module.exports = router;