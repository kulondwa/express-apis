const mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This filed is required",
  },
  mobile: {
    type: Number,
    required: "This field is required",
  },
  city: {
    type: String,
    required: "This field is required",
  },
});

mongoose.model("Student", studentSchema);
