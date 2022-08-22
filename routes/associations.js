const express = require("express");
const app = express();
const associations = require("../asociations");
const { checkIfExists } = require("../middlewares/associations");

// Affiche les 3 associations
app.get("/", (req, res) => {
  res.json(associations);
});

// Affiche 1 association
app.get("/:slug", checkIfExists, (req, res) => {
  res.json(req.association);
});

module.exports = app;
