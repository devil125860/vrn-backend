const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  ipAddr: {
    type: String,
    required: true,
  },
  triggerName: {
    type: String,
    required: true,
  },
  files: Object,
});

module.exports = File = mongoose.model("file", FileSchema);
