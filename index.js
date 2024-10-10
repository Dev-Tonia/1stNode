const http = require("http");
// const url = require("url");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end(fs.readFileSync("index.html"));
  } else if (pathName === "/setting") {
    res.end(fs.readFileSync("setting.html"));
  } else if (pathName === "/dashboard") {
    res.end(fs.readFileSync("dashboard.html"));
  } else {
    res.end(fs.readFileSync("404.html"));
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running at http://127.0.0.1:3000");
});
