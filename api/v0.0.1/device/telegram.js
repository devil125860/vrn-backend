const express = require("express");
const router = express.Router();

const Telegram = require("../../../models/Telegram");

router.post("/", async (req, res) => {
  try {
    console.log("Telegram", req.body[0].imei);

  
    // await Telegram.insertMany(req.body, { ordered: false }).catch((e) => {
    //   // console.log(e.writeErrors);
    //   throw { message: "Duplicate entry found!", writeErrors: e.writeErrors };
    // });

   const responce= await Telegram.bulkWrite(
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
    //   // console.log("/api/v0.0.1/device/telegram.js (xinj-11)", err.message);
    //   throw { message: err.message };
    // })

    // console.log("res tele ",res)
    res.status(200).json({responce});
  } catch (e) {
    console.log("/api/v0.0.1/device/telegram.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
