const express = require("express");
const router = express.Router();

const SmsLogs = require("../../../models/SmsLogs");

router.post("/", async (req, res) => {
  try {
    console.log("SmsLogs", req.body[0].imei);

    // await SmsLogs.insertMany(req.body, { ordered: false }).catch((e) => {
    //   throw { message: "Duplicate entry found!", writeErrors: e.writeErrors };
    // });
    const responce = await SmsLogs.bulkWrite(
      req.body.map((data) => ({
        updateOne: {
          filter: { uid: data.uid },
          update: { $set: data },
          upsert: true ,
        },
      })),
      {ordered:false}
    )
    // .catch(err=>{
    //   // console.log("/api/v0.0.1/device/whatsapp.js (xinj-11)", err.message);
    //   throw { message: err.message };
    // })
    res.status(200).json({responce});
  } catch (e) {
    console.log("/api/v0.0.1/device/smsLogs.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
