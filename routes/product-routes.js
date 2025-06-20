const express = require("express");
const router = express.Router();

// Define your routes here

router.get("/", (req, res) => {
  res.send("Product Home Page");
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Product Details for ID: ${productId}`);
});

module.exports = router;
