const Sequelize = require("sequelize");

const host = process.env.DB_HOST;
const userName = process.env.DB_USER_NAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

const db = new Sequelize(dbName, userName, password, {
  host,
  port: dbPort,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
});

module.exports = db;
