const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./Routes/admin.js");
const app = express();
const API = require("./Routes/API.js");
const api = require("./Routes/api.sanpham");

app.use(api);

app.use(API);

app.use(adminRoute);

app.use(express.static("Uploads"));
app.use(express.static("Public"));
app.use("*/Css", express.static("Public/Css"));
// app.use('*/js', express.static('public/js'));
app.use("*/Images", express.static("Public/Images"));

mongoose.set("useCreateIndex", true);

app.listen(process.env.PORT || 4000, () => {});

//connect to mongodb
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-mnn12.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log("Can not connect to mongodb, because " + err);
    } else {
      console.log("Connect to mongodb successful");
    }
  }
);

//cấu hình handlebars
const expressHbs = require("express-handlebars");
app.engine(
  ".hbs",
  expressHbs({
    defaultLayout: "",
  })
);
app.set("view engine", ".hbs");
