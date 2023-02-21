const { default: mongoose } = require("mongoose");

const userModel = mongoose.Schema({
  parentName: String,
  DoB: String,
  email: String,
  password: String,
  name: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  division: String,
  address: String,
  gender: String,
  passOut: Number,
  class: {
    required: true,
    type: String,
  },
  job: String,
  image: String,
});

module.exports = mongoose.model("users", userModel);
