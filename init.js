//app.js에서 import한 application

import app from "./app";

const PORT = 4500;

const handleListening = () =>
  console.log(`listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
