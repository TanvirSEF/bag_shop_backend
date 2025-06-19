const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  bgcolor: { type: String, default: "#ffffff" },
  textcolor: { type: String, default: "#000000" },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  panelcolor: { type: String, default: "#f0f0f0" },
  createdAt: { type: Date, default: Date.now },
});

const product = mongoose.model("product", productSchema);

module.exports = product;
