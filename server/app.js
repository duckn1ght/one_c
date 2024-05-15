const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const db = require("./db");
const routes = require("./routes")(app);


app.listen(port, () => console.log("> Сервер запущен на порте: " + port));
