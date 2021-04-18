// let downloadFile = function (req, res) {
//   let mongoose = require("mongoose"),
//     Schema = mongoose.Schema;

//   mongoose.connect(
//     "mongodb+srv://admin:shiro@shiro.ehk52.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     { useNewUrlParser: true }
//   );

//   var gridSchema = new Schema({}, { strict: false });

//   var Grid = mongoose.model("Grid", gridSchema, "fs.files");

//   Grid.find({}, function (err, gridfiles) {
//     if (err) throw err;
//     console.log(gridfiles);
//   });
// };

// module.exports = downloadFile;
