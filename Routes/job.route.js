const express = require("express");
const { jobModel } = require("../Models/job.model");
const jobRouter = express.Router();

//CREATE
jobRouter.post("/add", async (req, res) => {
  try {
    const newJob = new jobModel(req.body);
    await newJob.save();
    res.status(200).send({ msg: "Job added successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//READ
jobRouter.get("/", async (req, res) => {
  console.log(req.query);
  let query = req.query;
  try {
    const job = await jobModel.find(query);
    res.status(200).send(job);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { jobRouter };
