# youtubeclone

라이브러리,프레임워크 설명

설치할때 끝에 -D 하면 dev개발용으로 개인이 필요한 프로젝트로 표시됨. 프로젝트에필요한게아님(nodemon).

nodemon : https://www.npmjs.com/package/nodemon

- 자동으로 내용변환되면 서버재실행시켜줌
- sudo npm i nodemon
- package.json 안에 스크립트내용맨앞에 nodemon --exec 적어줌. --ignore 하고 경로/파일 적으면 그건제외됨
- 맨 끝에(편의상) --delay 2(초) 로 딜레이걸어서 몇초뒤에 실행되게끔도할수있음

express : https://www.npmjs.com/package/express

- 서버구현할수있게해주는 프레임워크
- connection들을 다루는 애들은 req, res, next를 기본으로 가지고있음.
- 미들웨어사용할수있음 순서중요 위에서부터 아래로실행. 미들웨어는 라우터위로..
- sudo npm i express <br>
  기본샘플 <br>
  import express from "express";<br>
  const app = express();<br>
  const PORT = 4500;<br>
  const handleListening = () => console.log(`listening on : http://localhost:${PORT}`);<br>
  const handleHome = (req, res) => res.send("hello from home");<br>
  //미들웨어 예시.next써서 이함수실행후 다음함수 실행시켜야함.<br>
  const betweenHome = (req, res, next) => {<br>
  console.log("i'm bettween");<br>
  next();<br>
  };<br>
  //미들웨어 예시2 미들웨어가 res이용하여 req연결끊을수있음.<br>
  //const middleware = (req, res, next) => {<br>
  // res.send("not happening")<br>
  //};<br>
  app.use(betweenHome);<br>
  //route<br>
  app.get("/", handleHome);<br>
  app.listen(PORT, handleListening);<br>

babel :
https://www.npmjs.com/package/@babel/node<br>
https://www.npmjs.com/package/babel-core<br>
https://www.npmjs.com/package/@babel/preset-env<br>
https://www.npmjs.com/package/core-js<br>

- 최신자바스크립트를 구형자바스크립트로 변환시켜줌.<br>
  //노드에서사용하는바벨, env버전, 바벨코어, 바벨업데이트이후 필요코어
- sudo npm i @babel/node @babel/preset-env @babel/core core-js@3
- .babelrc 파일만들고 안에
  {
  "presets": [
  [
  "@babel/preset-env",
  {
  "useBuiltIns": "usage",
  "corejs": 3
  }
  ]
  ]
  }

  집어넣음 //bable안에 여러버전이있는데 env버전쓴다는거.

- package.json 안에 스크립트내용 node index.js 대신 babel-node index.js 로 바꿔줌

morgan : https://www.npmjs.com/package/morgan

- logging(무슨일이 어디에 일어났는지기록)해주는 미들웨어
- ex//콘솔에 GET /profile 304 - - 0.575 ms 이런식으로 뜸.(morgan("dev")옵션)
- sudo npm i morgan<br>
  import morgan from "morgan";<br>
  app.use(morgan("dev"));

helmet : https://www.npmjs.com/package/helmet

- node.js앱의 보안에 도움이 됨
- sudo npm i helmet<br>
  import helmet from "helmet";<br>
  app.use(helmet());

body-parser : https://www.npmjs.com/package/body-parser

- 바디로부터 정보를 얻을수있게함(서버가 유저로부터 받은 데이터를 이해하는 방법).<br>
  누군가 form을 채워서 나에게 전송한다면(ex/아디 비번) 이form은 서버에 의해서 특정한 형태로 받아져야함<br>
  내가 그form(request object)에 접근하기위한미들웨어
- 옵션 3개 알아야함
  - json전송시 json옵션<br>
    app.use(bodyParser.json());
  - text
  - html form 전송시 urlencoded<br>
    app.use(bodyParser.urlencoded({extended : true }));
- sudo npm i body-parser<br>
  import bodyParser from "body-parser";<br>
  app.use(bodyParser());

cookie-parser : https://www.npmjs.com/package/cookie-parser

- 쿠키에 유저정보를 저장. 세션을 다루기위해(유저로부터 받은 쿠키를 이해하는 방법)
- sudo npm i cookie-parser<br>
  import cookieParser from "cookie-parser";<br>
  app.use(cookieParser());
