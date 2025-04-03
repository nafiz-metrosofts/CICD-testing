const express = require("express");
const path = require("path");

const app = express();

// Use a dynamic port or fallback to 5000
const port = process.env.PORT || 0;  // 0 lets the OS pick any free port
const host = "0.0.0.0";

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
  });
});

app.get("/counter", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const server = app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${server.address().port}`);
});

module.exports = server;  // Export server for tests
