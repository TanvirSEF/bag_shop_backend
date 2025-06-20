const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res.status(400).send("Owner already exists");
    } else {
      let { fullname, email, password } = req.body;
      let createdOwner = await ownerModel.create({ fullname, email, password });
      res.status(201).send(createdOwner);
    }
  });
}

router.get("/", (req, res) => {
  res.send("Owner Home Page");
});

module.exports = router;
