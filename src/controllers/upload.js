const upload = require("../middleware/upload");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req);
    console.log(req.file);
    if (req.file == undefined) {
      return res.redirect("/");
    }

    //return res.send(`File has been uploaded.`);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFile: uploadFile,
};
