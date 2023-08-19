const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../Users");

//get all users
router.get("/", (req, res) => {
  res.json(users);
});

// get user by ID
router.get("/:id", (req, res) => {
  const found = users.find((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

// add a new user
router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    mail: req.body.mail,
  };

  const findUser = users.find((user) => user.mail === newUser.mail);

  if (!newUser.name || !newUser.mail || findUser) {
    res.sendStatus(400);
  } else {
    users.push(newUser);
    res.json(users);
  }
});

module.exports = router;
