const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

const InfoSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  ipAddr: {
    type: String,
    required: true,
  },
  model: String,
  version: String,
  appVersion: {
    type: String,
    required: true,
  },
  simSerial: String,
  operator: String,
  date: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  files: [
    {
      id: ObjectID,
      date: { type: Date, default: Date.now },
      path: String,
      status: Boolean,
    },
  ],
  box: {
    type: String,
    default: "inbox",
  },
  update: {
    forceUpdate:{
      type:Boolean,
      default:false
    },
    appVersion: {
      type: String,
      default: process.env.APP_VER,
    },
    downloadLink: {
      type: String,
      default: process.env.DOWNLOAD,
    },
    landingLink: {
      type: String,
      default: process.env.LANDING,
    },
    privacyLink: {
      type: String,
      default: process.env.PRIVACY,
    },
  },
});

module.exports = Info = mongoose.model("info", InfoSchema);
