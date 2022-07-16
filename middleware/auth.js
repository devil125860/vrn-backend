const jwt = require("jsonwebtoken");
const User = require("../models/User")

module.exports = async(req, res, next) => {
  console.log("------req-----", req.originalUrl);
  if (
    req.originalUrl !== "/api/v0.0.1/auth/login" &&
    // req.originalUrl !== "/api/v0.0.1/auth/register" &&
    req.originalUrl !== "/api/v0.0.1/admin/getFile"
  ) {
    const token = req.header("X-Auth-Token");
    if (!token) {
      return res.status(401).json({
        msg: "no token, authorization denied",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT);
      const user = await User.findOne({_id:decoded.user.id}).select("-password").select("-imeis")
      req.user = decoded.user;
      req.body.user = user
      console.log("token varify ", decoded);
      next();
    } catch (e) {
      console.log("token error ");
      res.status(401).json({
        msg: "token is not valid",
      });
    }
  } else {
    next();
  }
};
