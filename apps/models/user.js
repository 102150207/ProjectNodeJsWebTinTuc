var db = require("../common/database");
var q = require("q");

var conn = db.getConnection();
//console.log(conn);
function addUser(users){
	if(users){
		var defer = q.defer();
		var query = conn.query('INSERT INTO users SET ?', users, 
			function (error, results, fields) {
			if (error){
				defer.reject(error);
			} else{
				defer.resolve(results);	
			}			  		
		});
		return defer.promise;
	}
	return false;
}
function getAllUser(){

	var defer = q.defer();
	var query = conn.query('SELECT * FROM users', function (error, users, fields) {
		if (error){
			defer.reject(error);
		} else{
			defer.resolve(users);	
		}			  		
	});
	return defer.promise;
}

function getEmailUser(email){
	if(email){
		var defer = q.defer();
		var query = conn.query('SELECT email FROM users WHERE ?',{email:email}, 
			function (error, users, fields) {
			if (error){
				defer.reject(error);
			} else{
				defer.resolve(users);	
			}			  		
		});
		return defer.promise;
	}
	return false;
}
function getUsernameUser(username){
	if(username){
		var defer = q.defer();
		var query = conn.query('SELECT username FROM users WHERE ?',{username:username}, 
			function (error, users, fields) {
			if (error){
				defer.reject(error);
			} else{
				defer.resolve(users);	
			}			  		
		});
		return defer.promise;
	}
	return false;
}
module.exports = {
	addUser : addUser,
	getAllUser : getAllUser,
	getEmailUser : getEmailUser,
	getUsernameUser : getUsernameUser
}