const mongoose = require("mongoose");
// const mongoose = require("../db/index.js");

const CallLogsSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  uid: String,
  number: String,
  duration: Number,
  type: String,
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

// CallLogsSchema.index({ imei: 1, number: 1, recordDate: 1 }, { unique: true });

module.exports = CallLogs = mongoose.model("callLogs", CallLogsSchema);
