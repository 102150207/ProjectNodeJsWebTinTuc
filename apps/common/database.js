var config = require("config");
var mysql = require("mysql");


var connection = mysql.createConnection({
  host     : config.get("mysql.host"),
  user     : config.get("mysql.user"),
  password : config.get("mysql.password"),
  database : config.get("mysql.database"),
  port 	   : config.get("mysql.port"),
 // charset : charsetType
});
 
 connection.connect(function (err){
    //nếu có nỗi thì in ra
    if (err) throw err.stack;
    //nếu thành công
    console.log('ket noi thanh cong');
    
});

//connection.connect();
function getConnection(){
	if(!connection){
		connection.connect();
	}
	return connection;
}
module.exports = {
	getConnection : getConnection
}
 
