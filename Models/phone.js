const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phone = new Schema({
  namephone: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  status: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  idloai: { type: String },
});

module.exports = mongoose.model("phone", phone);
