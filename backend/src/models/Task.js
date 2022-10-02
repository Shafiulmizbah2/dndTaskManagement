const db = require("../db");
const { DataTypes } = require("sequelize");

const statusType = {
  listed: 0,
  progress: 1,
  done: 2,
};

const Task = db.define("tasks", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: statusType.listed,
    allowNull: false,
  },
});

(async () => {
  await db.sync();
})();

module.exports = Task;
