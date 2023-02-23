const users = require("../models/users");

const auth = {
  register: (req, res) => {
    console.log("========op");
    delete req.body.file;
    if (req?.file?.filename) {
      req.body.image = req.file.filename;
    } else {
      req.body.image = "dummy.jpg";
    }

    users.create(req.body);
  },
  login: (req, res) => {
    users.findOne({ phone: req.body.phone }).then((data) => {
      res.cookie("u_id", String(data._id).split('"')[0]);
      console.log(data);
      res.status(200).json(data);
    });
  },
  logout: (req, res) => {
    res.cookie("u_id", "none", {
      expires: new Date(1),
    });
    res.send("successfully log out");
  },
};

module.exports = auth;
