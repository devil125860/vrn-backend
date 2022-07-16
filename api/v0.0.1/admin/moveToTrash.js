const express = require("express");
const router = express.Router();

const Info = require("../../../models/Info");
const auth = require("../../../middleware/auth");

router.post("/", auth, (req, res) => {
  try {
    console.log("moveToTrash",req.body)
    req.body.map(async (imei) => {
      let infoDevice = await Info.findOne({ imei });
      infoDevice.box = "trash";
      await infoDevice.save();
    });

    res.status(200).json("Done");
  } catch (e) {
    console.log("/api/v0.0.1/admin/moveToTrash.js (xinj-35)", e); //xinj-35
    res.status(500).send("/api/v0.0.1/admin/moveToTrash.js (xinj-36)"); //xinj-36
  }
});

module.exports = router;
