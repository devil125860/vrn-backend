const express = require("express");
const router = express.Router();

const Conion = require("../../../models/Conion");

router.post("/", async (req, res) => {
  try {
    console.log("Conion", req.body[0].imei);

  
    // await Conion.insertMany(req.body, { ordered: false }).catch((e) => {
    //   // console.log(e.writeErrors);
    //   throw { message: "Duplicate entry found!", writeErrors: e.writeErrors };
    // });

    const responce= await Conion.bulkWrite(
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

    res.status(200).json({responce});
  } catch (e) {
    console.log("/api/v0.0.1/device/conion.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
