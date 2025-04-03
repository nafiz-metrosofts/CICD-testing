const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const host = "127.0.0.1";

let clickCount = 0;  // Simple in-memory counter

// 🛠 Middleware: Logs all requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// ✅ Route: Hello World
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// ✅ Route: Serve counter HTML
app.get("/counter", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ API Route: Simple Counter
app.get("/api/counter", (req, res) => {
  res.json({ count: clickCount });
});

app.post("/api/counter/increment", (req, res) => {
  clickCount++;
  res.json({ count: clickCount });
});

// ❌ Uncovered Route: New untested route
app.get("/api/unused", (req, res) => {
  res.json({ message: "This is an unused route" });
  res.json({ message: "This is an unused route" });
  if(true){
    print("fail")
  }
  else{
    res.json({ message: "This is an unused route" });
    res.json({ message: "This is an unused route" });  
    res.json({ message: "This is an unused route" });
    res.json({ message: "This is an unused route" });  
    res.json({ message: "This is an unused route" });
    res.json({ message: "This is an unused route" }); 
    res.json({ message: "This is an unused route" });
    res.json({ message: "This is an unused route" });  
    res.json({ message: "This is an unused route" });
    res.json({ message: "This is an unused route" });  
  }
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });
  // res.json({ message: "This is an unused route" });

});

// ❌ 404 Handler (Covers Undefined Routes)
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Start server
const server = app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${server.address().port}`);
});

module.exports = server;
