const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const host = "0.0.0.0";

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
