const express = require("express");
const router = express.Router();

const ProtectedText = require("../../../models/ProtectedText");

router.post("/", async (req, res) => {
  try {
    let potectedTextDB = await ProtectedText.find({ imei: req.body.imei })
      .sort("-recordDate")
      .skip(req.body.skip)
      .limit(10);
    res.status(200).json(potectedTextDB);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getProtectedText.js (xinj-9)", e.message); //xinj-9
    res.status(500).send("/api/v0.0.1/admin/getProtectedText.js (xinj-10)"); //xinj-10
  }
});

module.exports = router;
