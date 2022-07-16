const express = require("express");
const router = express.Router();

const Contacts = require("../../../models/ContactsUpdated");

router.post("/", async (req, res) => {
  try {
    console.log("Contacts", req.body.imei);
    const contacts= await Contacts.findOne({imei:req.body.imei});
    if(contacts){
        contacts.contacts=[...contacts.contacts,...req.body.contacts]
        await contacts.save()
        return res.status(200).json({msg:"successfully added"});
    }else{
        const contact= new Contacts(req.body);
        await contact.save();
        return res.status(200).json({msg:"successfully added"});
    }
    

   
  } catch (e) {
    console.log("/api/v0.0.1/device/contacts.js (xinj-11)", e.message); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;
