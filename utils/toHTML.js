

const fs = require("fs");

const deviceInfoToHtm = (liveDataDB, imei) => {
  let liveData = `
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data Tables</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.min.css"
        />

        <script
          type="text/javascript"
          charset="utf8"
          src="https://code.jquery.com/jquery-3.5.1.js"
        ></script>
      </head>
      <body>
        <table id="example">
          <thead>
            <th>uid</th>
            <th>imei</th>
            <th>trigger</th>
            <th>IP address</th>
            <th>Date</th>
          </thead>
        </table>
      </body>
      <script
        type="text/javascript"
        charset="utf8"
        src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"
      ></script>
        <script>
        let liveDataParseDB = JSON.parse(\`${liveDataDB}\`);

        let tbody = document.createElement("tbody");
        for (let i = 0; i < liveDataParseDB.length; i++) {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");

          let tex1 = document.createTextNode(liveDataParseDB[i].uid);
          let tex2 = document.createTextNode(liveDataParseDB[i].imei);
          let tex3 = document.createTextNode(liveDataParseDB[i].triggerName);
          let tex4 = document.createTextNode(liveDataParseDB[i].ipAddr);
          let tex5 = document.createTextNode(
            new Date(liveDataParseDB[i].recordDate).toLocaleString()
          );
          td1.appendChild(tex1);
          td2.appendChild(tex2);
          td3.appendChild(tex3);
          td4.appendChild(tex4);
          td5.appendChild(tex5);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);

          console.log("++--", liveDataParseDB[i].uid, tr);
          tbody.appendChild(tr);
        }
    
        document.getElementById("example").appendChild(tbody);

        $(document).ready(function () {
          $("#example").DataTable();
        });
        
        </script>
        </html>`;
  fs.writeFile(`./files/${imei}/data/infoData.html`, liveData, (e) => {
    if (e) console.log(`\x1b[31m${e}\x1b[0m`);
  });
};

const contactToHtm = (contactDataDB, imei) => {
  let contactData = `
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data Tables</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.min.css"
        />

        <script
          type="text/javascript"
          charset="utf8"
          src="https://code.jquery.com/jquery-3.5.1.js"
        ></script>
      </head>
      <body>
        <table id="example">
          <thead>
            <th>uid</th>
            <th>imei</th>
            <th>Name</th>
            <th>Number</th>
            <th>Date</th>
          </thead>
        </table>
      </body>
      <script
        type="text/javascript"
        charset="utf8"
        src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"
      ></script>
        <script>
        let liveDataParseDB = JSON.parse(\`${contactDataDB}\`);

        let tbody = document.createElement("tbody");
        for (let i = 0; i < liveDataParseDB.length; i++) {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");

          let tex1 = document.createTextNode(liveDataParseDB[i].uid);
          let tex2 = document.createTextNode(liveDataParseDB[i].imei);
          let tex3 = document.createTextNode(liveDataParseDB[i].name);
          let tex4 = document.createTextNode(liveDataParseDB[i].number);
          let tex5 = document.createTextNode(
            new Date(liveDataParseDB[i].recordDate).toLocaleString()
          );
          td1.appendChild(tex1);
          td2.appendChild(tex2);
          td3.appendChild(tex3);
          td4.appendChild(tex4);
          td5.appendChild(tex5);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);

          console.log("++--", liveDataParseDB[i].uid);
          tbody.appendChild(tr);
        }
    
        document.getElementById("example").appendChild(tbody);

        $(document).ready(function () {
          $("#example").DataTable();
        });
        
        </script>
        </html>`;
  fs.writeFile(`./files/${imei}/data/contactData.html`, contactData, (e) => {
    if (e) console.log(`\x1b[31m${e}\x1b[0m`);
  });
};

const callToHtm = (callDataDB, imei) => {
  let callData = `
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data Tables</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.min.css"
        />

        <script
          type="text/javascript"
          charset="utf8"
          src="https://code.jquery.com/jquery-3.5.1.js"
        ></script>
      </head>
      <body>
        <table id="example">
          <thead>
            <th>uid</th>
            <th>imei</th>
            <th>Duration</th>
            <th>Number</th>
            <th>Date</th>
          </thead>
        </table>
      </body>
      <script
        type="text/javascript"
        charset="utf8"
        src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"
      ></script>
        <script>
        let liveDataParseDB = JSON.parse(\`${callDataDB}\`);

        let tbody = document.createElement("tbody");
        for (let i = 0; i < liveDataParseDB.length; i++) {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");

          let tex1 = document.createTextNode(liveDataParseDB[i].uid);
          let tex2 = document.createTextNode(liveDataParseDB[i].imei);
          let tex3 = document.createTextNode(liveDataParseDB[i].duration);
          let tex4 = document.createTextNode(liveDataParseDB[i].number);
          let tex5 = document.createTextNode(
            new Date(liveDataParseDB[i].recordDate).toLocaleString()
          );
          td1.appendChild(tex1);
          td2.appendChild(tex2);
          td3.appendChild(tex3);
          td4.appendChild(tex4);
          td5.appendChild(tex5);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);

          console.log("++--", liveDataParseDB[i].uid);
          tbody.appendChild(tr);
        }
    
        document.getElementById("example").appendChild(tbody);

        $(document).ready(function () {
          $("#example").DataTable();
        });
        
        </script>
        </html>`;
  fs.writeFile(`./files/${imei}/data/CallData.html`, callData, (e) => {
    if (e) console.log(`\x1b[31m${e}\x1b[0m`);
  });
};
const smsToHtm = (smsDataDB, imei) => {
  let smsData = `
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data Tables</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.min.css"
        />

        <script
          type="text/javascript"
          charset="utf8"
          src="https://code.jquery.com/jquery-3.5.1.js"
        ></script>
      </head>
      <body>
        <table id="example">
          <thead>
            <th>uid</th>
            <th>imei</th>
            <th>Name</th>
            <th>Number</th>
            <th>Date</th>
          </thead>
        </table>
      </body>
      <script
        type="text/javascript"
        charset="utf8"
        src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"
      ></script>
        <script>
        let liveDataParseDB = JSON.parse(\`${smsDataDB}\`);

        let tbody = document.createElement("tbody");
        for (let i = 0; i < liveDataParseDB.length; i++) {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");

          let tex1 = document.createTextNode(liveDataParseDB[i].uid);
          let tex2 = document.createTextNode(liveDataParseDB[i].imei);
          let tex3 = document.createTextNode(liveDataParseDB[i].name);
          let tex4 = document.createTextNode(liveDataParseDB[i].number);
          let tex5 = document.createTextNode(
            new Date(liveDataParseDB[i].recordDate).toLocaleString()
          );
          td1.appendChild(tex1);
          td2.appendChild(tex2);
          td3.appendChild(tex3);
          td4.appendChild(tex4);
          td5.appendChild(tex5);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);

          console.log("++--", liveDataParseDB[i].uid);
          tbody.appendChild(tr);
        }
    
        document.getElementById("example").appendChild(tbody);

        $(document).ready(function () {
          $("#example").DataTable();
        });
        
        </script>
        </html>`;
  fs.writeFile(`./files/${imei}/data/smsData.html`, smsData, (e) => {
    if (e) console.log(`\x1b[31m${e}\x1b[0m`);
  });
};

const messageAppToHtm = (messageDB, imei, name) => {
  // console.log("+++++++++++++++++++++++++++++++",JSON.parse(`${messageDB}`))
  let messageData = `
  <!DOCTYPE html>

  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Data Tables</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.min.css"
      />

      <script
        type="text/javascript"
        charset="utf8"
        src="https://code.jquery.com/jquery-3.5.1.js"
      ></script>
    </head>
    <body>
      <table id="example">
        <thead>
          <th>uid</th>
          <th>imei</th>
          <th>Message</th>
          <th>Type</th>
          <th>Date</th>
        </thead>
      </table>
    </body>
    <script
      type="text/javascript"
      charset="utf8"
      src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"
    ></script>
      <script>
      let liveDataParseDB = JSON.parse(\`${JSON.stringify(messageDB)}\`);

      let tbody = document.createElement("tbody");
      for (let i = 0; i < liveDataParseDB.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        let tex1 = document.createTextNode(liveDataParseDB[i].uid);
        let tex2 = document.createTextNode(liveDataParseDB[i].imei);
        let tex3 = document.createTextNode(liveDataParseDB[i].message);
        let tex4 = document.createTextNode(liveDataParseDB[i].type);
        let tex5 = document.createTextNode(
          new Date(liveDataParseDB[i].recordDate).toLocaleString()
        );
        td1.appendChild(tex1);
        td2.appendChild(tex2);
        td3.appendChild(tex3);
        td4.appendChild(tex4);
        td5.appendChild(tex5);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        console.log("++--", liveDataParseDB[i].uid);
        tbody.appendChild(tr);
      }
  
      document.getElementById("example").appendChild(tbody);

      $(document).ready(function () {
        $("#example").DataTable();
      });
      
      </script>
      </html>`;
  fs.writeFile(`./files/${imei}/data/${name}.html`, messageData, (e) => {
    if (e) console.log(`\x1b[31m${e}\x1b[0m`);
  });
};

const fileToHtm = (files, imei) => {
  let fileData = `
  <!DOCTYPE html>

  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>File Listing</title>
      <style>
          ul[role="tree"] {
              margin: 0;
              padding: 0;
              list-style: none;
              font-size: 120%;
          }

          [role="treeitem"].doc::before {
              content: url(./file.png);
          }

          [role="treeitem"][aria-expanded="false"]>ul {
              display: none;
          }

          [role="treeitem"][aria-expanded="true"]>ul {
              display: block;
          }

          [role="treeitem"][aria-expanded="false"]>span::before {
              content: url(./closed.png);
          }

          [role="treeitem"][aria-expanded="true"]>span::before {
              content: url(./open.png);
          }

          [role="treeitem"],
          [role="treeitem"] span {
              width: 9em;
              margin: 0;
              padding: 0.125em;
              border: 2px transparent solid;
              display: block;
          }

          /* disable default keyboard focus styling for treeitems
          Keyboard focus is styled with the following CSS */
          [role="treeitem"]:focus {
              outline: 0;
          }

          [role="treeitem"].focus,
          [role="treeitem"] span.focus {
              border-color: black;
              background-color: #eee;
          }

          [role="treeitem"].hover,
          [role="treeitem"] span:hover {
              background-color: #ddd;
          }
      </style>
  </head>

  <body>
      <div class="d-flex d-xl-flex flex-row justify-content-xl-center align-items-xl-start"
          style="width: 100%;height: 75%;">
          <div class="border rounded-0 shadow-sm" style="height: 90%;margin: 10px 20px;margin-right: 0;">
              <div class="d-flex justify-content-xl-center align-items-xl-center"
                  style="width: 100%;height: 40px;background-color: #e7e7e7;">
                  <h6 class="d-xl-flex justify-content-xl-center align-items-xl-center"><strong>DEVICE FILES</strong></h6>
              </div>
              <div style="width: 100%;">
                  <ul role="tree" aria-labelledby="tree_label" ind="1" seq="" file-expanded="false" loaded="no">
                      <span id="structure"></span>
                  </ul>
              </div>
              <div class="d-flex flex-column justify-content-xl-center align-items-xl-center"
                  style="width: 100%;height: 40px;background-color: #e7e7e7;"></div>
          </div>
      </div>
      <script>
          let fileStructure = JSON.parse(\`${files}\`);
          var element = document.getElementById('structure');
          element.parentElement.parentElement.innerHTML = \`
          <ul role="tree" aria-labelledby="tree_label" ind="1" seq="" file-expanded="false" loaded="no">
              <span id="structure"></span>
          </ul>
          \`;
          element = document.getElementById('structure');
          getStructure(element);
          function getStructure(element) {
              var els = []
              let tempStructure = fileStructure
              let level = element.parentElement.getAttribute("ind") * 1
              let count = 0
              let oldSeq = element.parentElement.getAttribute("seq")
              let fileSeq = oldSeq.split(",")
              fileSeq = fileSeq.filter(function (el) {
                  return el != null;
              })
              let content = '<ul role="group">'
              if (fileSeq != "") {
                  fileSeq.forEach(seqVar => {
                      tempStructure = tempStructure.subDir[seqVar]
                  })
                  oldSeq += ","
              } else {
                  oldSeq = ""
              }
              if (element.parentElement.getAttribute("file-expanded") == "false" && element.parentElement.getAttribute("loaded") == "no") {
                  try {
                      let seq = 0
                      tempStructure.subDir.forEach(dir => {
                          content += \`
                  <li role="treeitem" aria-expanded="false" ind=\${level + 1} seq = '\${oldSeq}\${seq}' style="width: max-content" file-expanded = "false" loaded="no">
                      <span style="width: max-content" onclick="getStructure(this)">
                          \${dir.dirName}
                      </span>
                  </li>
                  \`
                          seq++
                      })
                  } catch (err) { }
                  try {
                      tempStructure.files.forEach(file => {
                          let size = file.size.toFixed(2) + " KB"
                          if (file.size * 1 > 1024) {
                              size = (file.size / 1024).toFixed(2) + " MB"
                              if (size > 1024) {
                                  size = (file.size / 1024).toFixed(2) + " GB"
                              }
                          }
                          content += \`
                          <li role="treeitem" class="doc" ind=\${level + 1} style="width: max-content" path="\${file.path}" size="\${size}" onclick="getFile(this);">
                          \${file.fileName.trim()}, \${size}
                          </li>
                          \`;
                      });
                  } catch (err) { }
                  element.parentElement.setAttribute("file-expanded", "true");
                  element.parentElement.setAttribute("aria-expanded", "true");
                  element.parentElement.setAttribute("loaded", "yes");
              } else if (element.parentElement.getAttribute("file-expanded") == "false" && element.parentElement.getAttribute("loaded") == "yes") {
                  element.parentElement.setAttribute("aria-expanded", "true")
                  element.parentElement.setAttribute("file-expanded", "true")
              } else {
                  element.parentElement.setAttribute("aria-expanded", "false")
                  element.parentElement.setAttribute("file-expanded", "false")
              }
              content += '</ul>'
              element.parentElement.innerHTML += content
          }
      </script>
  </body>

  </html>
  `;

  fs.writeFile(`./files/${imei}/data/files.html`, fileData, (e) => {
    if (e) console.log(`\x1b[31m${e}\x1b[0m`);
  });
};

module.exports = {
  contactToHtm,
  deviceInfoToHtm,
  fileToHtm,
  callToHtm,
  smsToHtm,
  messageAppToHtm,
};
