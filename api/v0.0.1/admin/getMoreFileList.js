const express = require("express");
const router = express.Router();
const fs = require("fs");
const mkdirp = require("mkdirp");

const FileListing = require("../../../models/FileListing");

router.post("/", async (req, res) => {
  try {
    const {imei="",dir="" }= req.body;
    let fileListingDB = await FileListing.findOne({ imei: req.body.imei });
    console.log("more",dir);

    

    const sendFile = {
    
        dirName: "0",
        files: fileListingDB.files.files,
        subDir: [],
     
    };

    fileListingDB.files.subDir.map((dirOb) => {
        if(dirOb.dirName===dir){
            sendFile.subDir=dirOb.subDir;
        }
      
    });

    console.log("file call - ",sendFile)
    res.status(200).json(sendFile);
} catch (e) {
    console.log("/api/v0.0.1/admin/getFileListing.js (xinj-29)", e.message); //xinj-29
    res.status(500).send("/api/v0.0.1/admin/getFileListing.js (xinj-30)"); //xinj-30
  }
});

module.exports = router;