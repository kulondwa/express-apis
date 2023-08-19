const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json({ message: "hello there !" });
});

router.post("/posts", (req, res) => {
  res.json({ message: "posts created !" });
});

//login a user
router.post("/login", (req, res) => {
  const user = {
    id: uuid.v4(),
    name: "Mudimbe Vumbi Yoka",
    email: "mudimbe@gmail.com",
  };
  //   const user = {
  //     id: uuid.v4(),
  //     name: req.params.name.toString(),
  //     email: req.params.email.toString(),
  //   };
  jwt.sign({ user: user }, "secretKey", (err, token) => {
    res.json({ token });
  });
});

module.exports = router;
