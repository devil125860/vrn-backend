const express = require("express");
const router = express.Router();

const Viber = require("../../../models/Viber");

router.post("/", async (req, res) => {
  try {
    console.log("Viber", req.body);

    // await Viber.insertMany(req.body, { ordered: false }).catch((e) => {
    //   // console.log(e.writeErrors);
    //   throw { message: "Duplicate entry found!", writeErrors: e.writeErrors };
    // });

   const responce= await Viber.bulkWrite(
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
    //   // console.log("/api/v0.0.1/device/viber.js (xinj-11)", err.message);
    //   throw { message: err.message };
    // })
    res.status(200).json({responce});
  } catch (e) {
    console.log("/api/v0.0.1/device/viber.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
