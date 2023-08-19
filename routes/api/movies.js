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

// add a new movie
router.post("/", (req, res) => {
  const newMovie = {
    id: uuid.v4(),
    movieTitle: req.body.movieTitle,
    director: req.body.director,
    releaseDate: req.body.releaseDate,
    url: req.body.url,
  };

  const found = movies.find(
    (movie) => movie.movieTitle === newMovie.movieTitle.toString()
  );
  if (!newMovie.movieTitle || !newMovie.url || found) {
    res.sendStatus(400);
  } else {
    movies.push(newMovie);
    res.json({ message: "successfull operation", code: 200, movies });
  }
});

module.exports = router;
