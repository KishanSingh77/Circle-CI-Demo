const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
console.log(__dirname);

app.use(express.static(__dirname + "/dist/ngApp"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname));
});

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("app is running");
});
