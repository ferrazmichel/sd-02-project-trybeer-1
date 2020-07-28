require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const { error } = require('./middlewares');

const { users } = require('./routes');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/users', users);

app.use(error);

const PORT = process.env.PORT || 3001;

app.listen(Port, () => console.log(`Listening on ${PORT}`));
