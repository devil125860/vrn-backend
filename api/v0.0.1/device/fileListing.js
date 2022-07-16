const express = require("express");
const router = express.Router();

const FileListing = require("../../../models/FileListing");

router.post("/", async (req, res) => {
  try {
    console.log("fileListing", req.body.imei);
    await FileListing.updateOne(
      { imei: req.body.imei },
      {
        ...req.body,
      },
      { upsert: true, runValidators: true }
    );
    res.sendStatus(200);
  } catch (e) {
    console.log("/api/v0.0.1/device/fileListing.js (xinj-13)", e.message); //xinj-13
    res.sendStatus(500);
  }
});

module.exports = router;
