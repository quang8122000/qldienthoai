const mogoose = require("mongoose");
const Schena = mogoose.Schema;

const sanpham = new Schena({
  tenSP: { type: String, required: true, trim: true },
  gia: { type: String, required: true, trim: true },
  hinh: { type: String, required: true, trim: true },
});
module.exports = mogoose.model("sanpham", sanpham);
