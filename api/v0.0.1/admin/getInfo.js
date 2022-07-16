const express = require("express");
const router = express.Router();

const Info = require("../../../models/Info");


router.post("/", async (req, res) => {
  try {
    console.log("devices ",req.body)
    let info = await Info.findOne({imei:req.body.imei});
//    console.log("info call ",info)
    res.status(200).json(info);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getDevices.js (xinj-7)", e); //xinj-7
    res.status(500).send("/api/v0.0.1/admin/getDevices.js (xinj-8)"); //xinj-8
  }
});

module.exports = router;
