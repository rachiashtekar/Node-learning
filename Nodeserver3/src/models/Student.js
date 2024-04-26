const mongoose = require("mongoose");
const Student = mongoose.model("Student", {
    firstName: String,
    lastName: String,
    email: String,
  });

  module.exports = Student