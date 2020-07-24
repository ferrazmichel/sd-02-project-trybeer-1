require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

// const middlewares = require('./middlewares');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', routes.users);
app.use('/profile', routes.profile);

// app.use(middlewares.error);

const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
