//application 관련코드.

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//import는 알파벳순으로하는게 좋다..
import { localsMiddleware } from "./middleware";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

//middleware 순서대로 작동
app.use(helmet()); //보안
app.set("view engine", "pug"); //view engine
app.use(cookieParser()); //쿠키사용할수있게
app.use(bodyParser.json()); //json 보게
app.use(bodyParser.urlencoded({ extended: true })); //url보게.
app.use(morgan("dev")); //지금 내가뭐하고있는지 보게
app.use(localsMiddleware);

//router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//누군가 import할때 app.js의 object(app.use..등등)를 주겠다.
export default app;
