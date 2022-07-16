const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  uid: String,
  name: String,
  number: String,
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

ContactSchema.index({ number: 1, name: 1, imei: 1 }, { unique: true });

module.exports = Contact = mongoose.model("contact", ContactSchema);
