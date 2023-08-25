const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const uuid = require("uuid");

const booksModal = new Schema({
  title: String,
  topic: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: false,
  },
});

const authorSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  creatAt: {
    type: Date,
    default: Date.now,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
    },
  ],
});

module.exports = mongoose.model("authors", authorSchema);
module.exports = mongoose.model("books", booksModal);
