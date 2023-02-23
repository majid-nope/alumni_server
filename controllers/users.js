const users = require("../models/users");

const user = {
  all: (req, res) => {
    const id = req.cookies["u_id"];
    console.log(req);
    console.log(id);
    users.findById(id, { passOut: 1 }).then((result) => {
      users.find({ passOut: result.passOut }).then((result) => {
        console.log(result);
        res.status(200).json(result);
      });
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
