const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((_req, res) => res.status(200).json({ name: 'blabla', email: 'email@email.com' }))
  .post((req, _res) => console.log(req.body));

module.exports = router;
