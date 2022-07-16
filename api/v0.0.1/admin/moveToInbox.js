const express = require("express");
const router = express.Router();

const Info = require("../../../models/Info");
const auth = require("../../../middleware/auth");

router.post("/", auth, (req, res) => {
  try {
    req.body.map(async (imei) => {
      let infoDevice = await Info.findOne({ imei });
      infoDevice.box = "inbox";
      await infoDevice.save();
    });

    res.status(200).json("Done");
  } catch (e) {
    console.log("/api/v0.0.1/admin/moveToInbox.js (xinj-40)", e); //xinj-40
    res.status(500).send("/api/v0.0.1/admin/moveToInbox.js (xinj-41)"); //xinj-41
  }
});

module.exports = router;
