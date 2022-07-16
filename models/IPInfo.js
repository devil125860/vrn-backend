const mongoose = require("mongoose");

const IPInfoSchema = new mongoose.Schema({}, { strict: false });

module.exports = IPInfo = mongoose.model("ipInfo", IPInfoSchema);
