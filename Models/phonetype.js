const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonetype = new Schema({
  IDLoai: { type: String, unique: true, required: true, trim: true },
  NameHang: { type: String, required: true, trim: true },
});
module.exports = mongoose.model("phonetype", phonetype);
