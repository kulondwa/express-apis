const express = require("express");
const router = express.Router();
const path = require("path");
const handlebars = require("handlebars");
const exphbrs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");

router.get("/", (req, res) => {
  res.json({ message: "welcome to mongodb course" });
  res.send(`<h1> hello data base students </h1>`);
});

module.exports = router;
