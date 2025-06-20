const express = require("express");
const router = express.Router();

// Define your routes here

router.get("/", (req, res) => {
  res.send("User Home Page");
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User Details for ID: ${userId}`);
});

module.exports = router;
