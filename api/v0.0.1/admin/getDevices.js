const express = require("express");
const router = express.Router();

const Info = require("../../../models/Info");
const auth = require("../../../middleware/auth");
const User = require("../../../models/User");
const IPInfo = require("../../../models/IPInfo");
const LiveInfo = require("../../../models/LiveInfos");

router.post("/", auth, async (req, res) => {
  try {
    // req.body.user.

    if (!req.body.user)
      return res
        .status(401)
        .json({ error: "you have not enugh permission to create account" });

    const username = req.body.user.username;
    const user = await User.findOne({ username });
    const length = user.imeis.length;
    let infoDB = [];
    if (length === 1 && user.imeis[0] === "all") {
      infoDB = await Info.find();
    } else {
      infoDB = await Info.find({ imei: { $in: user.imeis } });
    }
    let ipInfo = await Promise.all(
      infoDB.map(async (device) => {
        const address = await LiveInfo.findOne({
          $and: [{ imei: device.imei }, { "location.address": { $ne: "" } }],
        }).sort("-date");
        // console.log(address);
        return {
          ...device._doc,
          ipInfo: { ...(await IPInfo.findOne({ query: device.ipAddr }))._doc },
          address: { ...(address != null ? address._doc : "N") },
        };
      })
    );

    res.status(200).json(ipInfo);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getDevices.js (xinj-7)", e); //xinj-7
    res.status(500).send("/api/v0.0.1/admin/getDevices.js (xinj-8)"); //xinj-8
  }
});

module.exports = router;
