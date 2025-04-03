const express = require("express");
const path = require("path");

const app = express();

// Use a dynamic port or fallback to 3000 for simplicity
const port = process.env.PORT || 3000;
const host = "127.0.0.1";  // Loopback for local development

// Serve static files first, so they can be accessed directly
app.use(express.static(path.join(__dirname, "public")));

// // Define the root route (Hello World)
// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!"); // Send plain text response
// });

// Serve the index.html for the /counter route
app.get("/counter", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server on the specified port
const server = app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${server.address().port}`);
});

module.exports = server;  // Export server for tests
