const express = require("express");

const auth = require("../../../middleware/auth");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (e) {
    console.log("/api/v0.0.1/user/auth.js (xinj-21)", e.message); //xinj-21
    res.status(500).send("/api/v0.0.1/user/auth.js (xinj-22)"); //xinj-22
  }
});

module.exports = router;
