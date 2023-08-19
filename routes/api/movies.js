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

// add more than one movie
router.post("/whole", (req, res) => {
  const newMovies = req.body;
  const found = movies.find(
    (movie) =>
      movie.movieTitle ===
      newMovies.map((newMovie) => newMovie.movieTitle.toString())
  );
  if (!newMovies || found) {
    res.json({ message: "one of the item exist in the system", status: 400 });
  } else {
    movies = movies.concat(newMovies);
    res.json({ message: "successful operation", status: 200, content: movies });
  }
});

//update a movie
router.put("/:id", (req, res) => {
  const updatedMovie = req.body;
  const found = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (found) {
    movies.map((movie) => {
      if (movie.id === parseInt(req.params.id)) {
        movie.director = updatedMovie.director
          ? updatedMovie.director
          : movie.director;
        movie.releaseDate = updatedMovie.releaseDate
          ? updatedMovie.releaseDate
          : movie.releaseDate;
        movie.movieTitle = updatedMovie.movieTitle
          ? updatedMovie.movieTitle
          : movie.movieTitle;
        movie.url = updatedMovie.url ? updatedMovie.url : movie.url;
        res.json({
          message: "the movie has been successfully updated",
          status: 200,
          movie,
        });
      }
    });
  } else {
    res.json({ message: "item not found", status: 400 });
  }
});

// delete a movie
router.delete("/:id", (req, res) => {
  const found = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (found) {
    movies = movies.filter((movie) => movie.id !== parseInt(req.params.id));
    res.json({
      message: "item has been successfully deleted",
      status: 200,
      content: movies,
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
