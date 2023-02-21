const users = require("../models/users");

const auth = {
  register: (req, res) => {
    delete req.body.file;
    req.body.image = req.file.filename;

    users.create(req.body);
  },
  login: (req, res) => {
    users.findOne({ phone: req.body.phone }).then((data) => {
      res.status(200).json(data);
    });
  },
};

module.exports = auth;
