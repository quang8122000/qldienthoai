const SanPham = require("../Models/sanpham");

// lấy tất cả dữ liệu
exports.getAll = async (request, response) => {
  try {
    let sanphams = await SanPham.find({});
    response.send(sanphams);
  } catch (error) {
    console.log(error);
  }
};
// sửa
exports.getSanPham = async (request, response) => {
  try {
    let sanpham = await Phone.findById(request.params.id);
    response.send(sanpham);
  } catch (error) {
    console.log(error);
  }
};
// Theo Tên SP
exports.getTenSP = async (request, response) => {
  try {
    let sanpham = await SanPham.find({ tenSP: request.params.tenSP });
    response.send(sanpham);
  } catch (error) {
    console.log(error);
  }
};
