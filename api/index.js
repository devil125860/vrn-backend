const router = require("express").Router();

router.use("/v0.0.1", require("./v0.0.1"));
router.use("/v0.0.2", require("./v0.0.2"));

module.exports = router;
