const mongoose = require("mongoose");
const debug = require("debug")("development:mongoose");
const config = require("config");

mongoose
  .connect(config.get("MONGODB_URI"))
  .then(() => {
    debug("Connected to MongoDB successfully");
  })
  .catch((err) => {
    debug("Error connecting to MongoDB:", err);
  });

const db = mongoose.connection;
module.exports = db;
