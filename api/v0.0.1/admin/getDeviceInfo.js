const express = require("express");
const router = express.Router();
const fs= require("fs");

const LiveInfo = require("../../../models/LiveInfos");

router.post("/", async (req, res) => {
  try {
    console.log("req.body.skip",req.body.skip)
    let liveInfoDB = await LiveInfo.find({ imei: req.body.imei }).sort("recordDate").skip(req.body.skip).limit(10);

    res.status(200).json(liveInfoDB);
   
  } catch (e) {
    console.log("/api/v0.0.1/admin/getDevices.js (xinj-5)", e.message); //xinj-5
    res.status(500).send("/api/v0.0.1/admin/getDevices.js (xinj-6)"); //xinj-6
  }
});

module.exports = router;
