const mongoose = require("mongoose");

const MessengerSchema = new mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  uid: String,
  title: String,
  message: String,
  type: String,
  triggerName: {
    type: String,
    required: true,
  },
  recordDate: {
    //need to receive whatsappTime and date combined as timestamp from the device
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// MessengerSchema.index(
//   { imei: 1, title: 1, message: 1, recordDate: 1 },
//   { unique: true }
// );

module.exports = Messenger = mongoose.model("messanger", MessengerSchema);
