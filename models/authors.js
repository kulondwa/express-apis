const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const uuid = require("uuid");

const authorSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  creatAt: {
    type: Date,
    default: Date.now,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("Author", authorSchema);
