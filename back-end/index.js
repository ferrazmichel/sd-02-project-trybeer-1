require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { error } = require('./middlewares');
const { users, profile } = require('./routes');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', users);
app.use('/profile', profile);

app.use(error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
