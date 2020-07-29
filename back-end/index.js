require('dotenv').config();

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { error } = require('./middlewares');
const { users } = require('./routes');

const { products } = require('./routes');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', users);

app.use('/products', products);

app.use('/images', express.static(path.join(__dirname, 'uploads')));


app.use(error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
