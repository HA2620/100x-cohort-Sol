const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const dir = __dirname;

app.use(express.json());

app.get("/files", (req, res) => {
  console.log("iiii");

  var fileNames = [];

  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).json({
        msg: "Some problem occured during file searching.",
      });
    } else {
      files.forEach((file) => {
        fileNames.push(file);
      });
    }
    res.status(200).json({
      fileList: fileNames,
    });
  });
});
app.get("/file/:fn", function (req, res) {
  var fileName = req.params.fn;
  // console.log();
  fs.readFile(dir + "/" + fileName, "utf8", function (err, data) {
    if (err) {
      res.status(404).json({
        msg: "File is not present",
      });
    } else {
      res.status(200).json({
        fileContents: data,
      });
    }
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
