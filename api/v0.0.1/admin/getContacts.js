const express = require("express");
const router = express.Router();

const Contacts = require("../../../models/Contacts");

router.post("/", async (req, res) => {
  try {
    console.log("contact ",req.body.skip)
    let contactsDB = await Contacts.find({ imei: req.body.imei }).sort("-recordDate").skip(req.body.skip).limit(10);;
    res.status(200).json(contactsDB);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getContacts.js (xinj-3)", e.message); //xinj-3
    res.status(500).send("/api/v0.0.1/admin/getContacts.js (xinj-4)"); //xinj-4
  }
});

module.exports = router;
