const Info = require("../models/Info");
const update = async () => {
  try {
    const info = await Info.updateMany(
      {},
      {
        $set: {
         "update.forceUpdate": false, //you can pass boolen as you want to update forcefully or not
          "update.appVersion": process.env.APP_VER,
          "update.downloadLink":process.env.DOWNLOAD,
          "update.landingLink":process.env.LANDING,
          "update.privacyLink":process.env.PRIVACY,
        },
      }
    );

    console.log("update", info);
  } catch (e) {
    console.log("error on update info for update apk link", e);
  }
};

update();


//${file.fileName.trim()}, ${size}