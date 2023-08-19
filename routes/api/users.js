const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../Users");

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
