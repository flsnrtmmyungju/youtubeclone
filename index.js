const express = require("express");
const app = express();

const PORT = 4500;

const handleListening = () => {
  console.log(`*1* listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  console.log("*2* req");
  res.send("hello from home");
};

app.get("/", handleHome);

app.listen(PORT, handleListening);
