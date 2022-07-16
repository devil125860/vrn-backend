const mongoose = require("mongoose");

const LiveInfoSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  ipAddr: {
    type: String,
    required: true,
  },
  uid: String,
  networkState: String,
  location: {
    lat: String,
    long: String,
    address: String,
  },
  triggerName: {
    type: String,
    required: true,
  },
  recordDate: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

LiveInfoSchema.index({ imei: 1, recordDate: 1 }, { unique: true });

module.exports = LiveInfo = mongoose.model("liveInfo", LiveInfoSchema);
