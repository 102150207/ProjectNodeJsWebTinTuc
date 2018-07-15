var express = require("express");
var router = express.Router();

router.use("/admin",require(__dirname + "/admin.js"));
router.use("/blog",require(__dirname + "/blog.js"));

router.get("/", function(req,res){
   // res.json({"massage":"hung","Age":20});
    res.render("text");
});

module.exports = router;
