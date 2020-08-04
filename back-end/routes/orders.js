const express = require("express");

const rescue = require("express-rescue");

const { orders } = require("../controllers");

const { auth, validate } = require("../middlewares");

const { ordersSchema } = require("../services/utils/joinSchemas");

const router = express.Router();

router.get("/", auth, rescue(orders.list));

router.get("/:id", auth, rescue(orders.details));

router.post("/", auth, validate(ordersSchema), rescue(orders.insert));

module.exports = router;
