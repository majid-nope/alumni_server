const users = require("../models/users");

const user = {
  all: (req, res) => {
    users.find().then((result) => {
      console.log(result);
      res.status(200).json(result);
    });
  },
  one: (req, res) => [
    users.findById(req.param.id).then((result) => {
      if (result) res.status(200).json(result);
      else {
        res.status(204).json({ data: "no user" });
      }
    }),
  ],
};

module.exports = user;
