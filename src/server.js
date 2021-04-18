const http = require("http");
const port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const initRoutes = require("./routes/web");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
