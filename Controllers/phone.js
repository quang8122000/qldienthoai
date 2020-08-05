const Phone = require("../Models/phone");

//get tất cả sản phẩm
exports.getAll = function (request, response) {
  Phone.find({})
    .lean()
    .exec(function (error, data) {
      response.render("index", { phoneList: data.reverse() });
      console.log(data);
      if (error) {
        log(error);
      }
    });
};

//get 1 sản phẩm
exports.getPhone = function (request, response) {
  Phone.findById(request.params.id)
    .lean()
    .exec((err, doc) => {
      if (!err) {
        response.render("edit", { Phone: doc });
      }
    });
};
//chỉnh sửa
exports.editPhone = function (request, response) {
  Phone.updateOne(
    { _id: request.body._id },
    {
      $set: {
        namephone: request.body.namephone,
        status: request.body.status,
        price: request.body.price,
      },
    },
    (err, doc) => {
      if (!err) {
        response.redirect("/index");
      } else {
        console.log("Edit Failed");
      }
    }
  );
};

//xóa sản phẩm
exports.deletePhone = function (request, response) {
  Phone.deleteOne({ _id: request.params.id }, (err, doc) => {
    if (!err) {
      response.redirect("/index");
    } else {
      console.log(err);
    }
  });
};
