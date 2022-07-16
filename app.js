require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");

require("./config/db")();

const app = express();

const port = 80;
const server = http.createServer(app);
server.listen(port, () => {
 console.log(`Server is up on port: ${port}!`);
});

app.use(cors());
app.use(express.json({ extended: false, limit: "250mb" }));
app.use(
  express.urlencoded({
    limit: "250mb",
    extended: true,
    parameterLimit: 50000,
  })
);

//
const { getZipFiles } = require("./api/v0.0.1/admin/getZipFiles");

app.get("/getZipFiles", getZipFiles);
app.use(express.static(path.join("/home/rebuild/backend-api/fileList")));
app.get("/fileList", (req, res) => {
  console.log("iam calling");
  res.sendFile("/home/rebuild/backend-api/fileList/FileList.html");
});

const auth = require("./middleware/auth");

app.use("/api", require("./api"));
app.get("/isAuthanticate", auth, (req, res) => {
  console.log(
    "auth call",
    req.headers["cf-connecting-ip"],
    req.headers["x-forwarded-for"],
    req?.connection?.remoteAddress,
    req.headers
  );
  res.status(200).json({ msg: "you are authanticate" });
});
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

module.exports = app