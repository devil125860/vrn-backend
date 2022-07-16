const mongoose = require("mongoose");

const SmsLogsSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  uid: String,
  number: String,
  message: String,
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
    default: Date.now(),
  },
});

// SmsLogsSchema.index(
//   { number: 1, message: 1, recordDate: 1, imei: 1 },
//   { unique: true }
// );

module.exports = SmsLogs = mongoose.model("smsLogs", SmsLogsSchema);
