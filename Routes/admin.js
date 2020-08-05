const adminController = require("../Controllers/admin");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer = require("multer");
const path = require("path");
//import models
const Phone = require("../Models/phone");

//import controllers
const PhoneController = require("../Controllers/phone");
//cấu hình multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  //kiểm tra file upload có phải là hình ảnh hay không
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5, //giới hạn filesize = 5Mb
  },
});
//phương thức upload file + insert dư liệu vào mongoDB
router.post("/upload", upload.single("image"), (request, response) => {
  let phone = new Phone({
    namephone: request.body.namephone,
    price: request.body.price,
    status: request.body.status,
    image: request.file.originalname, //chỉ lấy tên file upload
    idloai: request.body.idloai,
  });

  phone.save(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      response.redirect("/index");
    }
  });
});

//lấy dữ liệu từ form
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.render("SignIn");
});

router.post("/login", adminController.login);

router.get("/register", (req, res) => {
  res.render("SignUp");
});

router.post("/register", adminController.register);

//get All
router.get("/index", PhoneController.getAll);
//get Watch
router.get("/edit/:id", PhoneController.getPhone);
//edit
router.post("/edit", PhoneController.editPhone);
//delete
router.get("/delete/:id", PhoneController.deletePhone);

module.exports = router;
