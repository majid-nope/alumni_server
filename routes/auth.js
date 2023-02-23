var express = require("express");
const auth = require("../controllers/auth");
var router = express.Router();
const storage = require("../utils/storage");
const multer = require("multer");
const upload = multer({ storage: storage });

router.route("/register").all(upload.single('file')).post(auth.register);
router.route("/login").post(auth.login);
router.route("/logout").post(auth.logout);

module.exports = router;
