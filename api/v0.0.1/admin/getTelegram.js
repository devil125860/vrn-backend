const express = require("express");
const router = express.Router();

const Telegram = require("../../../models/Telegram");

router.post("/", async (req, res) => {
  try {
    let telegramDB = await Telegram.find({ imei: req.body.imei }).sort("-recordDate").skip(req.body.skip).limit(10);
    res.status(200).json(telegramDB);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getTelegram.js (xinj-9)", e.message); //xinj-9
    res.status(500).send("/api/v0.0.1/admin/getTelegram.js (xinj-10)"); //xinj-10
  }
});

module.exports = router;
