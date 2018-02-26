var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgersapp_db"
});

connection.connect(function(err){
  if(err) {
  console.log("error connecting: " + err.stack);
  return;
}
console.log("connected as id: " + connection.threadId);
});

//export connection for our ORM to use
module.exports = connection;
