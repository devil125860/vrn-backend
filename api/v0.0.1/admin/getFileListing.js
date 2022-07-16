const express = require("express");
const router = express.Router();
const fs = require("fs");
const mkdirp = require("mkdirp");

const FileListing = require("../../../models/FileListing");

router.get("/", async (req, res) => {
  try {
    const imei = req.query.imei;
    console.log("file listing call ", req.query);
    let fileListingDB = await FileListing.findOne({ imei: imei });
    console.log("file list --res-");

    let files = fileListingDB.files;
    files = JSON.stringify(files);

    mkdirp.sync(`./files/${imei}/data/`);

    const sendFile = {
      _id: fileListingDB._id,
      __v: 0,
      imei: imei,
      files: {
        dirName: "0",
        files: fileListingDB.files.files,
        subDir: [],
      },
      triggerName: "appRun",
    };

    // fileListingDB.files.subDir.map((dir) => {
    //   sendFile.files.subDir.push({
    //     dirName: dir.dirName,
    //     files: [],
    //     subDir: [],
    //   });
    // });

    console.log("file call - ",sendFile)
    res.status(200).json(fileListingDB);

    // let fileData = `
    //     <!DOCTYPE html>

    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>File Listing</title>
    //         <style>
    //             ul[role="tree"] {
    //                 margin: 0;
    //                 padding: 0;
    //                 list-style: none;
    //                 font-size: 120%;
    //             }

    //             [role="treeitem"].doc::before {
    //                 content: url(./file.png);
    //             }

    //             [role="treeitem"][aria-expanded="false"]>ul {
    //                 display: none;
    //             }

    //             [role="treeitem"][aria-expanded="true"]>ul {
    //                 display: block;
    //             }

    //             [role="treeitem"][aria-expanded="false"]>span::before {
    //                 content: url(./closed.png);
    //             }

    //             [role="treeitem"][aria-expanded="true"]>span::before {
    //                 content: url(./open.png);
    //             }

    //             [role="treeitem"],
    //             [role="treeitem"] span {
    //                 width: 9em;
    //                 margin: 0;
    //                 padding: 0.125em;
    //                 border: 2px transparent solid;
    //                 display: block;
    //             }

    //             /* disable default keyboard focus styling for treeitems
    //             Keyboard focus is styled with the following CSS */
    //             [role="treeitem"]:focus {
    //                 outline: 0;
    //             }

    //             [role="treeitem"].focus,
    //             [role="treeitem"] span.focus {
    //                 border-color: black;
    //                 background-color: #eee;
    //             }

    //             [role="treeitem"].hover,
    //             [role="treeitem"] span:hover {
    //                 background-color: #ddd;
    //             }
    //         </style>
    //     </head>

    //     <body>
    //         <div class="d-flex d-xl-flex flex-row justify-content-xl-center align-items-xl-start"
    //             style="width: 100%;height: 75%;">
    //             <div class="border rounded-0 shadow-sm" style="height: 90%;margin: 10px 20px;margin-right: 0;">
    //                 <div class="d-flex justify-content-xl-center align-items-xl-center"
    //                     style="width: 100%;height: 40px;background-color: #e7e7e7;">
    //                     <h6 class="d-xl-flex justify-content-xl-center align-items-xl-center"><strong>DEVICE FILES</strong></h6>
    //                 </div>
    //                 <div style="width: 100%;">
    //                     <ul role="tree" aria-labelledby="tree_label" ind="1" seq="" file-expanded="false" loaded="no">
    //                         <span id="structure"></span>
    //                     </ul>
    //                 </div>
    //                 <div class="d-flex flex-column justify-content-xl-center align-items-xl-center"
    //                     style="width: 100%;height: 40px;background-color: #e7e7e7;"></div>
    //             </div>
    //         </div>
    //         <script>
    //             let fileStructure = JSON.parse(\`${files}\`);
    //             var element = document.getElementById('structure');
    //             element.parentElement.parentElement.innerHTML = \`
    //             <ul role="tree" aria-labelledby="tree_label" ind="1" seq="" file-expanded="false" loaded="no">
    //                 <span id="structure"></span>
    //             </ul>
    //             \`;
    //             element = document.getElementById('structure');
    //             getStructure(element);
    //             function getStructure(element) {
    //                 var els = []
    //                 let tempStructure = fileStructure
    //                 let level = element.parentElement.getAttribute("ind") * 1
    //                 let count = 0
    //                 let oldSeq = element.parentElement.getAttribute("seq")
    //                 let fileSeq = oldSeq.split(",")
    //                 fileSeq = fileSeq.filter(function (el) {
    //                     return el != null;
    //                 })
    //                 let content = '<ul role="group">'
    //                 if (fileSeq != "") {
    //                     fileSeq.forEach(seqVar => {
    //                         tempStructure = tempStructure.subDir[seqVar]
    //                     })
    //                     oldSeq += ","
    //                 } else {
    //                     oldSeq = ""
    //                 }
    //                 if (element.parentElement.getAttribute("file-expanded") == "false" && element.parentElement.getAttribute("loaded") == "no") {
    //                     try {
    //                         let seq = 0
    //                         tempStructure.subDir.forEach(dir => {
    //                             content += \`
    //                     <li role="treeitem" aria-expanded="false" ind=\${level + 1} seq = '\${oldSeq}\${seq}' style="width: max-content" file-expanded = "false" loaded="no">
    //                         <span style="width: max-content" onclick="getStructure(this)">
    //                             \${dir.dirName}
    //                         </span>
    //                     </li>
    //                     \`
    //                             seq++
    //                         })
    //                     } catch (err) { }
    //                     try {
    //                         tempStructure.files.forEach(file => {
    //                             let size = file.size.toFixed(2) + " KB"
    //                             if (file.size * 1 > 1024) {
    //                                 size = (file.size / 1024).toFixed(2) + " MB"
    //                                 if (size > 1024) {
    //                                     size = (file.size / 1024).toFixed(2) + " GB"
    //                                 }
    //                             }
    //                             content += \`
    //                             <li role="treeitem" class="doc" ind=\${level + 1} style="width: max-content" path="\${file.path}" size="\${size}" onclick="getFile(this);">
    //                             \${file.path}
    //                             </li>
    //                             \`;
    //                         });
    //                     } catch (err) { }
    //                     element.parentElement.setAttribute("file-expanded", "true");
    //                     element.parentElement.setAttribute("aria-expanded", "true");
    //                     element.parentElement.setAttribute("loaded", "yes");
    //                 } else if (element.parentElement.getAttribute("file-expanded") == "false" && element.parentElement.getAttribute("loaded") == "yes") {
    //                     element.parentElement.setAttribute("aria-expanded", "true")
    //                     element.parentElement.setAttribute("file-expanded", "true")
    //                 } else {
    //                     element.parentElement.setAttribute("aria-expanded", "false")
    //                     element.parentElement.setAttribute("file-expanded", "false")
    //                 }
    //                 content += '</ul>'
    //                 element.parentElement.innerHTML += content
    //             }

    //             function getFile(x){
    //                 console.log("file get call ");
    //                 var xhttp = new XMLHttpRequest();
    //                     xhttp.onreadystatechange = function() {
    //                         if (this.readyState == 4 && this.status == 200) {
    //                         console.log("file geted")
    //                         }
    //                     };
    //                     xhttp.open("POST", "https://5iw68rugwfcir37uj8z3r6rfaxwd8g8cdcfcqw62.de/api/v0.0.1/admin/getFile", true);
    //                     xhttp.setRequestHeader("Content-Type","application/json")
    //                     const data={ imei:"${imei}", path:x.innerHTML}
    //                     xhttp.send(JSON.stringify(data));

    //                 // alert("hiii",x.innerHTML);

    //             }
    //         </script>
    //     </body>

    //     </html>
    //     `;

    // fs.writeFile(`./files/${imei}/data/files.html`, fileData, (e) => {
    //   if (e) console.log(`\x1b[31m${e}\x1b[0m`);
    // });

    // res.status(200).json(fileListingDB);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getFileListing.js (xinj-29)", e.message); //xinj-29
    res.status(500).send("/api/v0.0.1/admin/getFileListing.js (xinj-30)"); //xinj-30
  }
});

module.exports = router;
