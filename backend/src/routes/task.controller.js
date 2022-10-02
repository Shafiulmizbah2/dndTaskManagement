const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    //check if name is there
    if (!name) {
      return res.status(400).json({
        status: "failed",
        message: "name is a required field!",
      });
    }
    await Task.create({
      name,
    });

    return res.status(201).json({
      status: "success",
      message: "Task created.",
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    const listed = tasks.filter((item) => item.status == 0);
    const progress = tasks.filter((item) => item.status == 1);
    const done = tasks.filter((item) => item.status == 2);

    return res.status(200).json({
      status: "success",
      data: {
        progress,
        listed,
        done,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      message: "something wrong happed",
      error: err,
    });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const response = await Task.update({ status }, { where: { id } });
    // console.log(response);
    return res.status(200).json({
      satus: "success",
      message: "Task updated!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "failed",
      message: "Could not updated task.",
    });
  }
};

module.exports = {
  getTasks,
  updateTask,
  createTask,
};
