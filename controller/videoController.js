//videoController.js

//                                   home는 pug템플릿에서 사용하기위해..
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
