const router = require("express").Router();
const auth = require("../../middleware/auth");

router.use("/device", require("./device"));
router.use("/auth", require("./auth"));
router.use("/admin",auth, require("./admin"));

module.exports = router;
