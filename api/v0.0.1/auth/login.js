const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../../../models/User");

router.post(
  "/",
  [
    check("username", "username is required").trim().not().isEmpty(),
    check("password", "password is required").trim().not().isEmpty(),
  ],
  async (req, res) => {
    console.log("login request--",req.body);
    const errors = validationResult(req).errors;
    if (errors.length >= 1) {
      return res.status(400).json({ errors });
    } else {
      try {
        const { username, password } = req.body;
        let user = await User.findOne({ username });
        console.log("",user)
        if (!user) {
          return res.status(400).json({
            errors: [{ msg: "incorrect username, password combination" }],
          });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(400).json({
            errors: [{ msg: "incorrect username, password combination" }],
          });
        }

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(
          payload,
          process.env.JWT,
          { expiresIn: 3600000 },
          (e, token) => {
            if (e) throw e;
            return res.status(200).json({
              username,
              role: user.role,
              token,
            });
          }
        );
      } catch (e) {
        console.log("/api/v0.0.1/user/login.js (xinj-23)", e.message); //xinj-23
        return res.status(500).json({
          errors: [{ msg: "Internal Server Error (xinj-24)" }], //xinj-24
        });
      }
    }
  }
);

module.exports = router;
