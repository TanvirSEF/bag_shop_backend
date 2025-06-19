const mongoose = require("mongoose");
const { type } = require("os");

const ownerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: {
    type: {
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  picture: {
    type: String,
    default: "https://www.gravatar.com/avatar/00000000000000000000000000000000",
  },
  products: {
    type: Array,
    default: [],
  },
  idnumber: { type: String, required: true, unique: true },
});

const owner = mongoose.model("owner", ownerSchema);

module.exports = owner;
