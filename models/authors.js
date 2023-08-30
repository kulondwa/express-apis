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
});

module.exports = mongoose.model("Author", authorSchema);
