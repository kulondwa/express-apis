const express = require("express");
const router = express.Router();
const uuid = require("uuid");

let movies = require("../../Movies");

router.get("/", (req, res) => {
  res.json(movies);
});

module.exports = router;
