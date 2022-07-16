const multer = require("multer");
const mkdirp = require("mkdirp");
const express = require("express");
const router = express.Router();

const Info = require("../../../models/Info");

router.post("/", (req, res) => {
  let upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        mkdirp.sync(`./files/${req.body.imei}/data/`);
        cb(null, `./files/${req.body.imei}/data/`);
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    }),
  }).single("file");

  upload(req, res, async function (err) {
    try {
      if (err) {
        console.log("/api/v0.0.1/device/fileUpload.js (xinj-14)", err); //xinj-14
      } else {
        const device = await Info.findOne({ imei: req.body.imei });

        device.files.map((file) => {
          if (file._id.toString() === req.body.id.split(":")[0]) {
            file.status = true;
            console.log("----", file.status);
          }
          return file;
        });

        device.save();
      }
      res.send({ nextFile: `You have uploaded this file` });
    } catch (e) {
      console.log("/api/v0.0.1/device/fileUpload.js (xinj-33)", e); //xinj-33
      res.status(500);
    }
  });
});

module.exports = router;
