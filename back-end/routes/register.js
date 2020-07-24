const express = require("express");

const rescue = require("express-rescue");

const { register } = require("../controllers");

const { userSchema } = require("../services/joinSchemas");

const { validate } = require("../middlewares");

const router = express.Router();

router.post("/", validate(userSchema), rescue(register));

module.exports = router;
