const express = require("express");
const router = express.Router();

const Signal = require("../../../models/Signal");

router.post("/", async (req, res) => {
  try {
    let signalDB = await Signal.find({ imei: req.body.imei }).sort("-recordDate").skip(req.body.skip).limit(10);;
    res.status(200).json(signalDB);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getSignal.js (xinj-9)", e.message); //xinj-9
    res.status(500).send("/api/v0.0.1/admin/getSignal.js (xinj-10)"); //xinj-10
  }
});

module.exports = router;
