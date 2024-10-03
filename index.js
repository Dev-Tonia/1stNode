const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<h1>Hello Word!!!</h1>");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running at http://127.0.0.1:8000");
});
