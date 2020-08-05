//import modules
const express = require("express");
const router = express.Router();

//import controllers
const API = require("../Controllers/API");

//getAll
router.get("/api/sanphams", API.getAll);

router.get("/api/phone/:id", API.getPhone);

//edit
router.put("/api/phone/edit/:id", API.editPhone);

//delete
router.delete("/api/phone/delete/:id", API.deletePhone);

module.exports = router;
