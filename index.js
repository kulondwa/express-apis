const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
var app = express();

//json usage
app.use(express.json());
//urlencoded usage
app.use(express.urlencoded({ extended: false }));

//mongoDB connection
const db = mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ==>verify if the mongodb database is well connected
db.then(() => console.log("connected")).catch((err) => console.log(err));

// the api call for authors
const AuthorsRouter = require("./routes/author");
app.use("/api/authors", AuthorsRouter);

// the api call for books
const BooksRouter = require("./routes/books");
app.use("/api/books", BooksRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
