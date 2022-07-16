const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const router = express.Router();
const User = require("../../../models/User");

router.use(
  "/",
  async (req, res) => {
    console.log(req.body);
    if (req.body.user.role !== "superAdmin")
      return res
        .status(401)
        .json({ error: "you have not enugh permission to create account" });

    const errors = [];
    if (errors.length >= 1) {
      return res.status(400).json({ errors });
    } else {
      try {
        const { username, password, role="Admin",imeis=[] } = req.body;
        let user = await User.findOne({ username });

        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "user already exists" }] });
        }

        user = new User({
          username,
          password,
          role,
          imeis
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        return res.status(200).json({
          username,
          role,
        });
      } catch (e) {
        console.log("/api/v0.0.1/user/register.js (xinj-25)", e.message); //xinj-25
        return res.status(500).json({
          errors: [{ msg: "Internal Server Error (xinj-26)" }], //xinj-26
        });
      }
    }
  }
);

module.exports = router;
