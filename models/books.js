const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const uuid = require("uuid");

const booksModal = new Schema({
  id: { type: String, default: uuid.v4() },
  title: String,
  topic: String,
  author: String,
});

module.exports = mongoose.model("books", booksModal);
