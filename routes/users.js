var express = require("express");
const user = require("../controllers/users");
var router = express.Router();

router.route("/").get(user.all);
router.route("/:id").get(user.one);

module.exports = router;
