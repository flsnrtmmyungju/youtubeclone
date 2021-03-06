# youtubeclone

<hr/>
<h1>그냥 알아야할것 정리</h1>

- 설치할때 끝에 -D 하면 dev개발용으로 개인이 필요한 프로젝트로 표시됨.<br>
  프로젝트에필요한게아님(ex/nodemon).

<h2>MVC 설명</h2>

패턴,구조 같은것.

- M : 데이터
- V : 데이터가 어떻게 생겼는지
- C : 데이터를 찾는 함수

<h2>arrow function</h2>

<pre><code>
nomal function ex/

 function a () {
   return a;
 };

arrow function ex/
 ex1//
 const a () => a;  //암시적 성격을가져 return 안써도 a가 리턴인줄인식.
 ex2//
 const a () => {
   return a;  //{}을 쓰면 암시적 성격이 없어져 return 써야함.
 }

</code></pre>
<hr/>
<h1>설명 기본틀- 라이브러리,프레임워크 설명</h1>

<h2></h2>

- <h4>npm 주소</h4>

- <h4>설명</h4>

- <h4>설치</h4>

<pre><code>
 
</code></pre>

- <h4>사용법</h4>

<pre><code>       
** 파일명 **
  
 
</code></pre>

<hr/>

<h2>nodemon</h2>

- <h4>npm 주소</h4>

  https://www.npmjs.com/package/nodemon

- <h4>설명</h4>

  자동으로 내용변환되면 서버재실행시켜줌

- <h4>설치</h4>

<pre><code>
 sudo npm i nodemon
</code></pre>

- <h4>사용법</h4>

<pre><code>       
** package.json **
  
 "scripts": {
     "start": "nodemon --exec node init.js --delay 2"
  }
    
 --ignore 하고 경로/파일 적으면 그건제외됨
 맨 끝에(편의상) --delay 2(초) 로 딜레이걸어서 몇초뒤에 실행되게끔도할수있음
    
</code></pre>

<hr/>
<h2>express</h2>

- <h4>npm 주소</h4>

  https://www.npmjs.com/package/express

- <h4>설명</h4>

  서버구현할수있게해주는 프레임워크<br>
  connection들을 다루는 애들은 req, res, next를 기본으로 가지고있음.<br>
  미들웨어사용할수있음 순서중요 위에서부터 아래로실행. 미들웨어는 라우터위로 작성<br>
  라우터할때 /id하면 text로 아는데 /:id 로하면 변할수있는 값으로 인식함.<br>
  ex//const VIDEO_DETAIL = "/:id";

- <h4>설치</h4>

<pre><code>
 sudo npm i express
</code></pre>

- <h4>사용법</h4>

<pre><code>
 export를 default 로하면 그 파일을 export한다는것 ex/ export default a;
 부를땐 ex/ import a from "./a";
  
 아닐경우 그변수만 export한다는것 ex/ export const a = express.Router(); 
 부를땐 import {a} from "./a";

기본샘플

** app.js **

 import express from "express";
 import { userRouter } from "./router";

 const app = express();
 const handleHome = (req, res) => res.send("hello from home");

 //미들웨어 예시.next써서 이함수실행후 다음함수 실행시켜야함.
 // const betweenHome = (req, res, next) => {
 //console.log("i'm bettween");
 //next();
 //};

 //미들웨어 예시2 미들웨어가 res이용하여 req연결끊을수있음.
 //const middleware = (req, res, next) => {
 // res.send("not happening")
 //};

 //app.use(betweenHome);

 //route
 app.get("/", handleHome);

 //route 방법1
 app.get("/profile", handleProfile);

 //route 방법2 쪼개서사용
 //누군가 /user 경로에 접속하면 router.js의 라우터전체를 이용하겠다.

 app.use("/user", userRouter);

 //누군가 import할때 app.js의 object(app.use..등등)를 주겠다.
 export default app;

** init.js **
 import app from "./app";

 const PORT = 4500;
 const handleListening = () => console.log(`listening on : http://localhost:${PORT}`); 

 app.listen(PORT, handleListening);

**router.js **
 import express from "express";

 export const userRouter = express.Router();

 userRouter.get("/", (req, res) => res.send("user index"));
 userRouter.get("/edit", (req, res) => res.send("user edit"));
 userRouter.get("/password", (req, res) => res.send("user password"));

</code></pre>

<hr/>
<h2>Pug</h2>

- <h4>주소</h4>
  - pug주소

  https://pugjs.org/api/getting-started.html

  - pug문법

  https://jeong-pro.tistory.com/65

- <h4>설명</h4>

  pug은 템플릿 언어. express의 view engine.<br>
  express로 HTML을 보여줄수있음.<br>
  res.send대신 실제 HTML전달.

- <h4>설치</h4>

<pre><code>
 sudo npm i pug
</code></pre>

- <h4>사용법</h4>

<pre><code>       
** app.js **

 app.set("view engine", "pug");

//미들웨어
import { localsMiddleware } from "./middleware";

app.use(localsMiddleware);

** middleware.js **

export const localsMiddleware = (req, res, next) => {
  //res.locals  : express기본 미들웨어 , 정보를 내보내는데에 유용
  res.locals.siteName = "youtubecline";
};

** /views/layouts/main.pug **

doctype html
 html
     head
                                        //-middleware.js에서 설정해서 이쪽으로 보냄.
         title #{siteName}
     body
         header
             h1 a
         main
             block content              //block: 아이디로 다른파일에서 이부분바꿀수있게.
         include ../partials/footer     //include: 외부의 것을 불러오는방법. 

** /views/home.pug **

 //- 이레이아웃을 템플릿에서확장하겠다. layouts/main의 코드들도 사용하고 추가적인것을 더쓰겠다.
 extends layouts/main

 //- block content아래에 적으면 layouts/main의 main에 내용들어감.
 block content
    p Home

** /partials/header **
 header.header
     //- div.~~~일때는 div안적고 걍 아이디만적어도댐.
     .header__column  
         i.fab.fa-youtube

** /partials/footer **

 footer.footer
     div.footer__icon
         i.fab.fa-youtube
     span.footer__text #{siteName} #{new Date().getFullYear()} &copy; // #{} 로 자바스크립트 코드집어넣을수있음.


** Controller 파일의 home부분.

 export const home = (req, res) => res.render("home"); 
</code></pre>

<hr/>

<h2>Multer</h2>

- <h4>주소</h4>

  깃헙
  https://github.com/expressjs/multer/blob/master/doc/README-ko.md

  설명블로그
  https://wayhome25.github.io/nodejs/2017/02/21/nodejs-15-file-upload/

- <h4>설명</h4>

  익스프레스 사용시 파일 업로드를 위해 사용되는 multipart/form-data 를 다루기 위한 node.js 의 미들웨어 입니다.<br>
  효율성을 최대화 하기 위해 busboy 를 기반으로 하고 있습니다.<br>
  Multer는 multipart (multipart/form-data)가 아닌 폼에서는 동작하지 않습니다.

- <h4>설치</h4>

<pre><code>
 sudo npm i multer 
</code></pre>

- <h4>사용법</h4>

 <pre><code>       
 ** app.js **

 const multer = require('multer')

 나머지는 사이트에 자세히..
</code></pre>

<hr/>
<h2>babel</h2>

- <h4>npm 주소</h4>

  https://www.npmjs.com/package/@babel/node<br>
  https://www.npmjs.com/package/babel-core<br>
  https://www.npmjs.com/package/@babel/preset-env<br>
  https://www.npmjs.com/package/core-js<br>

- <h4>설명</h4>

  최신자바스크립트를 구형자바스크립트로 변환시켜줌.

- <h4>설치</h4>

<pre><code>
 // 노드에서사용하는바벨,      env버전,     바벨코어, 바벨업데이트이후 필요코어

 sudo npm i @babel/node @babel/preset-env @babel/core core-js@3
</code></pre>

- <h4>사용법</h4>

<pre><code>
 ** .babelrc **
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

  
 ** package.json **
  "scripts": {
      "start": " babel-node init.js" // node app.js 대신 babel-node app.js 로 바꿔줌
  }

</code></pre>

<hr/>

<h2>morgan</h2>

- <h4>npm 주소</h4>

  https://www.npmjs.com/package/morgan

- <h4>설명</h4>

  logging(무슨일이 어디에 일어났는지기록)해주는 미들웨어<br>
  ex//콘솔에 GET /profile 304 - - 0.575 ms 이런식으로 뜸.(morgan("dev")옵션)

- <h4>설치</h4>

<pre><code>
 sudo npm i morgan
</code></pre>

- <h4>사용법</h4>

<pre><code>
 import morgan from "morgan";

 app.use(morgan("dev"));
</code></pre>

<hr/>

<h2>helmet</h2>

- <h4>npm 주소</h4>

  https://www.npmjs.com/package/helmet

- <h4>설명</h4>

  node.js앱의 보안에 도움이 됨

- <h4>설치</h4>

<pre><code>
  sudo npm i helmet<br>
</code></pre>

- <h4>사용법</h4>

<pre><code>  
  import helmet from "helmet";
  
  app.use(helmet());
</code></pre>

<hr/>

<h2>body-parser</h2>

- <h4>npm 주소</h4>

  https://www.npmjs.com/package/body-parser

- <h4>설명</h4>

  사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어.<br>
  바디로부터 정보를 얻을수있게함(서버가 유저로부터 받은 데이터를 이해하는 방법).<br>
  누군가 form을 채워서 나에게 전송한다면(ex/아디 비번) 이form은 서버에 의해서 특정한 형태로 받아져야함<br>
  내가 그form(request object)에 접근하기위한미들웨어

  - 옵션 3개 알아야함

    - json전송시 json옵션

      app.use(bodyParser.json());

    - text
    - html form 전송시 urlencoded

      app.use(bodyParser.urlencoded({extended : true }));

- <h4>설치</h4>

<pre><code>
  sudo npm i body-parser
</code></pre>

- <h4>사용법</h4>

<pre><code>
 import bodyParser from "body-parser";

 app.use(bodyParser());
</code></pre>

<hr/>
<h2>cookie-parser</h2>

- <h4>npm 주소</h4>

  https://www.npmjs.com/package/cookie-parser

- <h4>설명</h4>

  쿠키를 전달받아서 사용할수 있도록 만들어주는 미들웨어 (ex//사용자 인증)

  쿠키에 세션을 다루기위해(유저로부터 받은 쿠키를 이해하는 방법) 유저정보를 저장.

- <h4>설치</h4>

<pre><code>
 sudo npm i cookie-parser
</code></pre>

- <h4>사용법</h4>

<pre><code> 
    import cookieParser from "cookie-parser";
  
    app.use(cookieParser());
</code></pre>
<hr/>

<h2>localsMiddleware</h2>

- <h4>설명</h4>

      npm이아닌 직접코딩한 미들웨어

* <h4>설치</h4>

<pre><code>
 
</code></pre>

- <h4>사용법</h4>

<pre><code>       
** 파일명 **
  
 
</code></pre>

<hr/>
