const express = require("express");
const router = express.Router();

const WhatsappBussiness = require("../../../models/WhatsappBussiness");

router.post("/", async (req, res) => {
  try {
    console.log("Whatsapp bussiness ", req.body[0]);

    const resdata = await WhatsappBussiness.bulkWrite(
      req.body.map((data) => ({
        updateOne: {
          filter: { uid: data.uid },
          update: {
            $set: {
              imei: data.imei,
              uid: data.uid,
              title: data.title,
              message: data.message,
              type: data.type,
              triggerName: data.triggerName,
              recordDate: new Date(),
            },
          },
          upsert: true,
        },
      })),
      { ordered: false }
    );
    res.status(200).json({ resdata });
  } catch (e) {
    console.log("/api/v0.0.1/device/whatsappbussiness.js (xinj-11)", e); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
