const express = require("express");
const axios = require("axios");
const router = express.Router();

const Info = require("../../../models/Info");

router.post("/", async (req, res) => {
  try {
    console.log("info", req.body.triggerName);

    const now = new Date();
    let ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "92.42.44.173";

///
console.log("info ip====",ip)
if(ip.split(":")[2]=="ffff"){
  ip=ip.split(":")[3];
}

///


    let respo = await axios.get(`http://ip-api.com/json/${ip}`);
    let ipInfoDB = await IPInfo.findOne({ query: respo.data.query });

    ipInfoDB
      ? IPInfo.updateOne({ query: respo.data.query }, { ...respo.data })
      : (() => {
          ipInfoDB = new IPInfo({ ...respo.data });
          ipInfoDB.save();
        })();

    let infoDB = await Info.findOne({ imei: req.body.imei });

    if (infoDB) {
      infoDB.updated = now;
      infoDB.ipAddr = ip;
    } else {
      infoDB = new Info({ ...req.body, updated: now, ipAddr: ip });
    }

    infoDB
      .save()
      .then(() => {
        res.status(200).json(infoDB);
      })
      .catch((e) => {
        console.log("/api/v0.0.1/device/info.js (xinj-15)", e); //xinj-15
        res.sendStatus(500);
      });
  } catch (e) {
    console.log("/api/v0.0.1/device/info.js (xinj-16)", e.message); //xinj-16
    res.sendStatus(500);
  }
});

module.exports = router;
