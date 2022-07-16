const mongoose = require("mongoose");

const ContactUpdateSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  contacts:[
    {
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
    }
  ]
  
});

// ContactUpdateSchema.index({ number: 1, name: 1, imei: 1 }, { unique: true });

module.exports = ContactUpdate = mongoose.model("contactUpdate", ContactUpdateSchema);
