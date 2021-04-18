// const download = require("../middleware/download");

// const downloadFile = async (req, res) => {
//   try {
//     await download(req, res);
//     console.log(req);
//     console.log(req.file);
//   } catch (error) {
//     console.log(error);
//     return res.send(`Error when trying download image: ${error}`);
//   }
// };

// module.exports = {
//   downloadFile: downloadFile,
// };

const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

module.exports = {
  getHome: home,
};
