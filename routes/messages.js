const express = require("express");
const app = express();
const moment = require("moment");
const messages = require("../messages");
const { checkIfAssociationExists } = require("../middlewares/messages");

app.get("/", (req, res) => {
  const sortedMessages = messages.sort((a, b) => {
    return moment(b.date).format("x") - moment(a.date).format("x");
  });

  res.json(sortedMessages);
});

app.post("/", checkIfAssociationExists, (req, res) => {
  const message = {
    object: req.body.object,
    content: req.body.content,
    association: req.body.association,
    date: moment().format(),
  };

  messages.push(message);
  res.json(message);
});

module.exports = app;
