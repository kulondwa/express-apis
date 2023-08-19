const express = require("express");
const router = express.Router();
const uuid = require("uuid");

let movies = require("../../Movies");

// get all movies
router.get("/", (req, res) => {
  res.json({ message: "successful operation", status: 200, content: movies });
});

// get movie by title
router.get("/:movieTitle", (req, res) => {
  const found = movies.find(
    (movie) => movie.movieTitle === req.params.movieTitle.toString()
  );
  if (found) {
    res.json({
      message: "element exist in the system",
      status: 200,
      content: found,
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
