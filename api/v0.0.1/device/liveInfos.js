const express = require("express");
const router = express.Router();

const LiveInfos = require("../../../models/LiveInfos");

router.post("/", (req, res) => {
  try {
    console.log("LiveInfos", req.body[0].imei);
    const ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "92.42.44.173";

    req.body.forEach((info) => {
      let infoDB = new LiveInfos({ ...info, ipAddr: ip });
      infoDB.save().catch((e) => {
        console.log("Duplicate liveInf found");
      });
    });

    res.sendStatus(200);
  } catch (e) {
    console.log("/api/v0.0.1/device/liveInfo.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
