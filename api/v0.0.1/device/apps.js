const express = require("express");
const router = express.Router();

const Apps = require("../../../models/Apps");

router.post("/", async (req, res) => {
  try {
    console.log("apps", req.body[0]);

  const responce=  await Apps.bulkWrite(
      req.body.map((data) => ({
        updateOne: {
          filter: { uid: data.uid },
          update: { $set: data },
          upsert: true ,
        },
      })),
      {ordered:false}
    )

    res.status(200).json({responce});
  } catch (e) {
    console.log("/api/v0.0.1/device/apps.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
