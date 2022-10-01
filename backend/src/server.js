require("dotenv").config();

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8000;

//connect database

//create server and listen
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
