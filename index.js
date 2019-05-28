import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const PORT = 4500;

const handleListening = () =>
  console.log(`listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(helmet());
app.use(morgan("dev"));

//route
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
