const express = require("express");
const router = express.Router();

const db = require("../data/db-config.js");

router.get("/all", (req, res) => {
    db("users")
      .returning("id")
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(error => {
        res.status(500).json({ error: "The posts could not be retrieved." });
      });
  });

  module.exports = router;