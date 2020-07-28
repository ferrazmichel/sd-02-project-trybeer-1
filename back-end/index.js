require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
// const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.use('/users', routes.users);

// app.use(middlewares.error);

const Port = 3001;

app.listen(Port, () => console.log(`Listening on ${Port}`));
