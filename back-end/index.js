require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

// const middlewares = require('./middlewares');

const { register } = require("./routes");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/register", register);

// app.use(middlewares.error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
