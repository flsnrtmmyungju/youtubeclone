import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  //res.locals  : express기본 미들웨어 , 정보를 내보내는데에 유용
  res.locals.siteName = "Youtube Clone";
  res.locals.routes = routes;
  next();
};
