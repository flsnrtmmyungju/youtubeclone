//videoController.js

//res.send : res.send("home");처럼 옵션한개만..
//res.render : pug템플릿 각각에 정보를 전달하기위해.첫번째인자는 템플릿,두번째인자는 추가할정보가 담긴 객체
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
