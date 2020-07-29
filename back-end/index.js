require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
// const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/users", routes.users);

// app.use(middlewares.error);

app.listen(3001, () => console.log("Listening on 5000"));
