const expesss = require("express");
const router = expesss.Router();

const API = require("../Controllers/api.controllers");

router.get("/api/sanphams", API.getAll);

router.put("/api/sanpham/:id", API.getSanPham);

router.get("/api/sanpham/:tenSP", API.getTenSP);

module.exports = router;
