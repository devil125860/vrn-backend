const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (e) {
    console.log("/config/db.js (dev-1)", e.message); //dev-1
    process.exit(1);
  }
};
