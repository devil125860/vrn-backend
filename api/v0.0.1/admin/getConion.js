const express = require("express");
const router = express.Router();

const Conion = require("../../../models/Conion");

router.post("/", async (req, res) => {
  try {
    let conionDB = await Conion.find({ imei: req.body.imei }).sort("-recordDate").skip(req.body.skip).limit(10);;
    res.status(200).json(conionDB);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getConion.js (xinj-9)", e.message); //xinj-9
    res.status(500).send("/api/v0.0.1/admin/getConion.js (xinj-10)"); //xinj-10
  }
});

module.exports = router;
