const mongoose = require("mongoose");
// const mongoose = require("../db/index.js");

const AppsSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  uid: String,
  app_name: String,
  package_name: String,
  directory: String,
  icon: String,

  triggerName: {
    type: String,
    required: true,
  },
  recordDate: {
    type: Date,
    default: Date.now,
  },
  version: {
    type: String,
  },
});

AppsSchema.index(
  { imei: 1, uid: 1, app_name: 1, version: 1 },
  { unique: true }
);

module.exports = Apps = mongoose.model("Apps", AppsSchema);
