const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: {
    type: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    default: [],
  },
  orders: {
    type: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    default: [],
  },
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
});

const user = mongoose.model("user", userSchema);

module.exports = user;
