const express = require("express");
const cors = require("cors");
const { connection } = require("./config");
const { jobRouter } = require("./Routes/job.route");
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use("/job", jobRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`server is running on port ${process.env.port} `);
});
