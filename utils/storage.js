const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/images`);
  },
  filename: function (req, file, cb) {
    
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `image-${uniqueSuffix}.${file.mimetype.split("/")[1]}`);
  },
});

module.exports = storage;
