require("dotenv").config();

const express = require("express");
const getData = require("./getData");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.post("/api/weather", getData);

app.listen(5005, (err) => {
  !err && console.log("started");
});
