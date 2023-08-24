const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const booksModal = new Schema({
  title: String,
  topic: String,
  author: String,
});

module.exports = mongoose.model("books", booksModal);
