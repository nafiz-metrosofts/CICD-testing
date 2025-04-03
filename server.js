const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const host = "0.0.0.0";  // <-- Ensure external access

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});

module.exports = app;
