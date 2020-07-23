require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
// const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.use('/users', routes.users);

// app.use(middlewares.error);

app.listen(3000, () => console.log('Listening on 5000'));
