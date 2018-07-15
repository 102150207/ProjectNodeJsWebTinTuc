
 var express = require("express");
 var config = require("config");
 var bodyParser = require("body-parser");
 var app = express();
// cau hinh cho body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// cấu hình ejs cho tầng views
app.set("views", __dirname + "/apps/views");
app.set("view engine","ejs");

// cấu hình static folder public
app.use("/static",express.static(__dirname + "/public"));

var controllers = require(__dirname + "/apps/controllers");
app.use(controllers);



var host = config.get("server.host");
var port = config.get("server.port");
app.listen(port,host,function(){
  console.log("Server is running port "+ port);
});
