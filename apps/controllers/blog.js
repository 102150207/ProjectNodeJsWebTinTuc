var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
   res.json({"massage":"hung blog.js"});
});

module.exports = router;