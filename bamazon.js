// dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
// connection to myql server and sql database
var connection = mysql.createConnection({
	host : "localhost",
	port : 3306, 

	user: "root",

	password: "",
	database: "bamazon_DB"

});

connection.connect(function(err) {
	if (err) throw err;
});

var storeStart = function () {
	inquirer.prompt ({
		
	})
}