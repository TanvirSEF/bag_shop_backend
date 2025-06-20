const express = require("express");
const router = express.Router();

// Define your routes here

router.get("/", (req, res) => {
  res.send("Owner Home Page");
});

router.get("/:id", (req, res) => {
  const ownerId = req.params.id;
  res.send(`Owner Details for ID: ${ownerId}`);
});

module.exports = router;
