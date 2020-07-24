const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => res.status(200).json({ name: 'blabla', email: 'email@email.com' }))
  .post((req, res) => console.log(req.body));

module.exports = router;
