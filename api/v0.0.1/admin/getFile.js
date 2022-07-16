const express = require("express");
const router = express.Router();

const Info = require("../../../models/Info");

router.post("/", async (req, res) => {
  try {
    const { imei, path } = req.body;
    let device = await Info.findOne({ imei });

    device.files.push({
      path,
      status: false,
    });

    device.save();

    res.status(200).json(device);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getFile.js (xinj-31)", e.message); //xinj-31
    res.status(500).send("/api/v0.0.1/admin/getFile.js (xinj-32)"); //xinj-32
  }
});

module.exports = router;
