const express = require("express");
const router = express.Router();

const Signal = require("../../../models/Signal");

router.post("/", async (req, res) => {
  try {
    console.log("Signal", req.body[0].imei);

  
    // await Signal.insertMany(req.body, { ordered: false }).catch((e) => {
    //   // console.log(e.writeErrors);
    //   throw { message: "Duplicate entry found!", writeErrors: e.writeErrors };
    // });
   const responce=  await Signal.bulkWrite(
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
    //   // console.log("/api/v0.0.1/device/whatsapp.js (xinj-11)", err.message);
    // })


    res.status(200).json({responce});
  } catch (e) {
    console.log("/api/v0.0.1/device/signal.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
