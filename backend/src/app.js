const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/task.route");
const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

//Routes
app.use("/tasks", taskRouter);

module.exports = app;
