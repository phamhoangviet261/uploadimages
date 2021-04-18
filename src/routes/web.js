const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const downloadController = require("../controllers/download");

let routes = (app) => {
  router.get("/", homeController.getHome);

  router.post("/upload", uploadController.uploadFile);

  router.get("/image", (req, res) => {
    const path = require("path");
    var MongoClient = require("mongodb").MongoClient;
    var url =
      "mongodb+srv://admin:shiro@shiro.ehk52.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let arrJSON;
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      var query = " select * from photos.chunks ";
      dbo
        .collection("photos.chunks")
        .find(query)
        .toArray(function (err, result) {
          if (err) throw err;
          //console.log(result);
          db.close();
          res.json(result);
          chunks = result;
        });
    });

    //res.json(files);
    //res.sendFile(path.join(`${__dirname}/../views/index.html`));
  });
  router.get("/download", (req, res) => {
    var mongo = require("mongodb");
    var Grid = require("gridfs-stream");
    // create or use an existing mongodb-native db instance
    var db = new mongo.Db(
      "myFirstDatabase",
      "mongodb+srv://admin:shiro@shiro.ehk52.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    var gfs = Grid(db, mongo);
    var readstream = gfs.createReadStream({ _id: "607b11098ec74f32ec358a7f" });
    readstream.pipe(response);
  });
  router.get("/loadimage", (req, res) => {
    const path = require("path");
    var MongoClient = require("mongodb").MongoClient;
    var url =
      "mongodb+srv://admin:shiro@shiro.ehk52.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let arrJSON;
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      var query = " select * from photos.files ";
      dbo
        .collection("photos.files")
        .find(query)
        .toArray(function (err, result) {
          if (err) throw err;
          //console.log(result);
          db.close();
          res.json(result);
          chunks = result;
        });
    });

    //res.json(files);
    //res.sendFile(path.join(`${__dirname}/../views/index.html`));
  });

  return app.use("/", router);
};

module.exports = routes;
/*tối nay,
làm 1 hàm fecth khi bấm vào nút xem ảnh ở trang home
fetch data từ route.get/image, decrypt ảnh ra data
rồi hiển thị ra màn hình
*/
