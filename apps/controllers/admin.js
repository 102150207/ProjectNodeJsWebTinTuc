var express = require("express");
var router = express.Router();
var q = require("q");

var user_md = require("../models/user.js");


router.get("/", function(req,res){
	//conncet database and function ==> getAllUser();
    var data = user_md.getAllUser();
    console.log(data);
    data.then(function(users){
    	data = {
    		users : users,
    		error : false
    	}
    	res.render("../views/admin/admin.ejs",{data : data});
    }).catch(function(){
    	res.render("../views/admin/admin.ejs",{data : true});
    });
    
});

router.get("/signup",function(req,res){
	res.render("signup",{data : {}});
});

router.post("/signup",function(req,res){ 
	var user = req.body;
	// check email already exists and email have null
	if(user.email.trim().length == 0){
		res.render("signup",{data : {error : "Not input email is required"}});
	}
	 else {
		var data = user_md.getEmailUser(user.email);
		if(data){
			data.then(function(users){
				var email = users[0];
				console.log(email);
				if(email == user.email){
					res.render("signup",{data : {error : " Email already exists"}});
				}
			});
			//res.render("signup",{data : {error : " Email already exists"}});
		}
	}
	// check username already exists and username have null
	if(user.username.trim().length == 0){
		res.render("signup",{data : {error : "Not input username is required"}});
	}
	else{
		var data = user_md.getUsernameUser(user.username);
		if(data){
			data.then(function(users){
				var username = users[0];
				console.log(username);
				if(username == user.username){
					res.render("signup",{data : {error : " Username already exists"}});
				}
			});
		}
	}
	// check password and cfpassword == null
	if(user.password.trim().length == 0){
		res.render("signup",{data : {error : "Not input error Empty password "}});
	}else if(user.cfpassword.trim().length ==0 ){
		res.render("signup",{data : {error : "Not input error cofirm Empty password "}});
	}
	// check password and cfpassword have same
	if( (user.password != user.cfpassword)){
		res.render("signup",{data : {error : "Confirm password error"}});
	}	
	// INSERT user 
	// var create_at = new Date();
	// var update_at = new Date();
	users = {
		name : user.username,
		email : user.email,
		level : 0,
		password : user.password
		// create_at : user.create_at,
		// update_at : user.update_at
	}
	var result = user_md.addUser(users);
	result.then(function(data){
		res.render("login");
	}).catch(function(err){
		res.render("signup",{data : {error : "error"}});
	});
});

router.get("/login",function(req,res){
	res.render("login");
});
router.get("/post",function(req,res){
	res.render("../views/admin/post.ejs");
});

router.get("/new_post",function(req,res){
	res.render("../views/admin/new_post.ejs");
});

router.get("/settings",function(req,res){
	res.render("../views/admin/settings.ejs");
});

// router.get("/users",function(req,res){
// 	res.render("../views/admin/user.ejs");
// });

router.get("/users", function(req,res){
	// conncet database and function ==> getAllUser();
    var data = user_md.getAllUser();
    console.log(data);
    data.then(function(users){
    	data = {
    		users : users,
    		error : false
    	}
    	res.render("../views/admin/user.ejs",{data : data});
    }).catch(function(){
    	res.render("../views/admin/user.ejs",{data : true});
    });
    
});

router.get("/new_users",function(req,res){
	res.render("../views/admin/new_user.ejs");
});

router.get("/slider",function(req,res){
	res.render("../views/admin/slider.ejs");
});

router.get("/new_slider",function(req,res){
	res.render("../views/admin/new_slider.ejs");
});

router.get("/contact",function(req,res){
	res.render("../views/admin/contact.ejs");
});
module.exports = router;