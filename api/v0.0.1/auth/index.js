const router = require("express").Router();
const auth = require("../../../middleware/auth");

router.use("/login", require("./login"));
router.use("/auth", require("./auth"));
router.post("/register",auth, require("./register"));

module.exports = router;
