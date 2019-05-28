import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

// const PORT = 4500;

// const handleListening = () =>
// console.log(`listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

//route
app.get("/", handleHome);
//route 방법1
app.get("/profile", handleProfile);
//route 방법2 쪼개서사용
//누군가 /user 경로에 접속하면 router.js의 라우터전체를 이용하겠다.
app.use("/user", userRouter);

//누군가 import할때 app.js의 object(app.use..등등)를 주겠다.
export default app;
