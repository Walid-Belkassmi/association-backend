const express = require("express");
const app = express();
const associations = require("../asociations");
const { verifyAssociation } = require("../middlewares/associations");
const messages = require("../massages.json");
const moment = require("moment");

// Affiche les 3 associations
app.get("/", (req, res) => {
  res.json(associations);
});

// Affiche 1 association
app.get("/:slug", verifyAssociation, (req, res) => {
  res.json(req.association);
});

// Affiche les messages/commentaires
app.get("/messages", (req, res) => {
  const messagesSorted = messages
    .sort((a, b) => {
      return moment(a.time).diff(moment(b.time));
    })
    .reverse();

  res.json(messagesSorted);
});

// Permet de poster un message/commentaire
app.post("/", verifyAssociation, (req, res) => {
  const message = {
    name: req.body.name,
    message: req.body.message,
    time: moment().format("MMMM Do YYYY, h:mm:ss a"),
    slug: req.body.slug,
  };

  messages.push(message);
  res.status(201).json("Message sent");
});

module.exports = app;
