const express = require("express");
const router = express.Router();

const CallLogs = require("../../../models/CallLogs");

router.post("/", async (req, res) => {
  try {
    console.log("CallLogs", req.body[0].imei);

    // await CallLogs.insertMany(req.body, { ordered: false }).catch((e) => {
    //   throw { message: "Duplicate entry found!", writeErrors: e.writeErrors };
    // });

    const responce=await CallLogs.bulkWrite(
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
    //   throw { message: err.message };
    //   // console.log("/api/v0.0.1/device/protectedText.js (xinj-11)", err.message);
    // })
    
    res.status(200).json({responce});
  } catch (e) {
    console.log("/api/v0.0.1/device/callLogs.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
