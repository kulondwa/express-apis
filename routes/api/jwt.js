const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json({ message: "hello there !" });
});

const verifyToken = (req, res, next) => {
  const bearHeader = req.headers["authorization"];
  if (bearHeader !== undefined) {
    const bearToken = bearHeader.split(" ")[1];
    req.token = bearToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

router.post("/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "successful operation",
        authData,
      });
    }
  });
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
