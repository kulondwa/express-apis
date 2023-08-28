const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const uuid = require("uuid");

const booksModal = new Schema({
  title: String,
  topic: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});
module.exports = mongoose.model("Book", booksModal);
