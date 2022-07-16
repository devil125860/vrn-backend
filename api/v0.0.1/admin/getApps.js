const express = require("express");
const router = express.Router();

const Apps = require("../../../models/Apps");

router.post("/", async (req, res) => {
  try {
    console.log("get apps imei",req.body.imei)
    let apps = await Apps.find({ imei: req.body.imei }).sort("-recordDate").skip(req.body.skip).limit(10);
    console.log("apps ",apps[0],apps.length)
    res.status(200).json(apps);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getApps.js (xinj-1)", e.message); //xinj-1
    res.status(500).send("/api/v0.0.1/admin/getCallLogs.js (xinj-2)"); //xinj-2
  }
});

module.exports = router;