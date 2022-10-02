const express = require("express");
const { getTasks, updateTask, createTask } = require("./task.controller");
const taskRouter = express.Router();

taskRouter.post("/", createTask);
taskRouter.get("/", getTasks);
taskRouter.patch("/:id", updateTask);

module.exports = taskRouter;
