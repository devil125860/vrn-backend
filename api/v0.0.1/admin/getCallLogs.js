const express = require("express");
const router = express.Router();

const CallLogs = require("../../../models/CallLogs");

router.post("/", async (req, res) => {
  try {
    let callLogsDB = await CallLogs.find({ imei: req.body.imei }).sort("-recordDate").skip(req.body.skip).limit(10);
    res.status(200).json(callLogsDB);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getCallLogs.js (xinj-1)", e.message); //xinj-1
    res.status(500).send("/api/v0.0.1/admin/getCallLogs.js (xinj-2)"); //xinj-2
  }
});

module.exports = router;
