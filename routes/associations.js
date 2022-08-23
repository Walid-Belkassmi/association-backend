const express = require("express");
const app = express();
const associations = require("../associations");
const { checkIfExists } = require("../middlewares/associations");

app.get("/", (req, res) => {
  res.json(associations);
});

app.get("/:slug", checkIfExists, (req, res) => {
  res.json(req.association);
});

module.exports = app;
