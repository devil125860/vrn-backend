// const mkdirp = require("mkdirp");
// const admZip = require("adm-zip");
// const fs = require("fs");
// const path = require("path");

// const getZipFiles = async (req, res) => {
//   try {
//     console.log("i am call ", req.query);
//     const imei = req.query.imei;
//     if (imei === undefined) {
//       return res.status(400).json({ msg: "imei is not found!" });
//     }
//     const dateString = new Date().toLocaleString().split(", ");
//     const fileName = imei + "-" + dateString[0] + "-" + dateString[1] + ".zip";
//     const directoryPath = path.join(__dirname, `../../../files/${imei}/data`);
//     const zip = new admZip();

//     // const readStream = fs.createReadStream(`${directoryPath}/test.zip`);
//     // res.set("Content-Type", "application/octet-stream");
//     // res.set("Content-Disposition", `attachment; filename=${fileName}`);
//     // // res.set("Content-Length", readStream.length);
//     // readStream.pipe(res);

//     fs.readdir(directoryPath, (err, files) => {
//       if (err) {
//         console.log("unable to read directory ", err);
//         return res.status(201).json({
//           error:
//             "unable to read directory, please try again to refresh this page",
//         });
//       }
//       for (let i = 0; i < files.length; i++) {
//         zip.addLocalFile(`${directoryPath}/${files[i]}`);
//       }

//       const zipBuffer = zip.toBuffer();

//       res.set("Content-Type", "application/octet-stream");
//       res.set("Content-Disposition", `attachment; filename=${fileName}`);
//       res.set("Content-Length", zipBuffer.length);
//       res.send(zipBuffer);
//     });
//   } catch (err) {
//     console.log("get zip files error ", err);
//     return res.status(500).json({
//       error: "unable to read directory, please try again to refresh this page",
//     });
//   }
// };

// module.exports = { getZipFiles };

const mkdirp = require("mkdirp");
const admZip = require("adm-zip");
const fs = require("fs");
const path = require("path");
// const { exec } = require("child_process");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const getZipFiles = async (req, res) => {
  try {
    console.log("i am call ", req.query);
    const imei = req.query.imei;
    if (imei === undefined) {
      return res.status(400).json({ msg: "imei is not found!" });
    }
    const dateString = new Date().toLocaleString().split(", ");
    const fileName = imei + "-" + dateString[0] + "-" + dateString[1] + ".zip";
    const directoryPath = path.join(__dirname, `../../../files/${imei}`);

    const readStream = fs.createReadStream(`${directoryPath}/data.zip`);
    fs.stat(`${directoryPath}/data.zip`, (err, stat) => {
      if (err)
        return res.status(500).json({
          error:
            "unable to read directory, please try again to refresh this page",
        });
      const filesize = stat.size;
      console.log("file size -- ", filesize);
      res.set("Content-Type", "application/octet-stream");
      res.set("Content-Disposition", `attachment; filename=${fileName}`);
      res.set("Content-Length", filesize);
      readStream.pipe(res);
    });
  } catch (err) {
    console.log("get zip files error ", err);
    return res.status(500).json({
      error: "unable to read directory, please try again to refresh this page",
    });
  }
};

module.exports = { getZipFiles };
//e4856e519b9d5a53
