import express from "express";
const app = express();

const PORT = 4500;

const handleListening = () =>
  console.log(`listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("you are on my profile");

const betweenHome = (req, res, next) => {
  console.log("bettween");
  next();
};

//route
app.get("/", handleHome);

app.use(betweenHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
