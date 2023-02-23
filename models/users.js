const { default: mongoose } = require("mongoose");

const userModel = mongoose.Schema({
  parentName: String,
  DoB: String,
  email: String,
  password: String,
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  division: String,
  address: String,
  gender: String,
  passOut: Number,
  class: {
    type: String,
  },
  job: String,
  image: String,
});

module.exports = mongoose.model("users", userModel);
