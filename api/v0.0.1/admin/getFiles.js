// const express = require("express");
// const router = express.Router();

// const Info = require("../../../models/Info");

// router.post("/", async (req, res) => {
//   try {
//     const { imei, filePaths = [] } = req.body;
//     console.log("request body ",req.body)
//     let device = await Info.findOne({ imei });
//     console.log( "request objects ", filePaths);
//     const allRequestedFiles = filePaths.map((path) => {

//       return {
//         path,
//         status: false,
//       };
//     });

//     console.log( "request objects ", device);
//     device.files=[...device.files,...allRequestedFiles];
//     // console.log(device?.files)
//     // device.files.push({
//     //   path,
//     //   status: false,
//     // });

//     device.save();

//     res.status(200).json(device);
//   } catch (e) {
//     console.log("/api/v0.0.1/admin/getFiles.js (xinj-31)", e.message); //xinj-31
//     res.status(500).send("/api/v0.0.1/admin/getFile.js (xinj-32)"); //xinj-32
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const Info = require("../../../models/Info");

router.post("/", async (req, res) => {
  try {
    const { imei, filePaths = [] } = req.body;
    console.log("request body ", req.body);
    let device = await Info.findOne({ imei });
    console.log("request objects ", filePaths);

    // const resp= await Info.updateOne(
    //   {imei},
    //   {
    //     $addToSet: {
    //       files: {
    //         $each: filePaths.map((path) => {
    //           return {
    //             path,
    //             status: false,
    //           };
    //         }),
    //       },
    //     },
    //   }
    // );



    const filteredData = filePaths.filter((p) => {
      return !device?.files.some((obj) => {
        return p == obj?.path;
      });
    });

   
    const allRequestedFiles = filteredData.map((path) => {
      return {
        path,
        status: false,
      };
    });
    device.files = [...device.files, ...allRequestedFiles];
    await device.save();

    res.status(200).json(device);
  } catch (e) {
    console.log("/api/v0.0.1/admin/getFiles.js (xinj-31)", e); //xinj-31
    res.status(500).send("/api/v0.0.1/admin/getFile.js (xinj-32)"); //xinj-32
  }
});
module.exports = router;
