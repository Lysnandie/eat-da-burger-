// Set up connection to the mysql database
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgersapp_db"
  })}


// then make the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// then export this connection for the ORM to use.
module.exports = connection;

// var mysql = require("mysql");
// var connection;
//
// // var connection = mysql.createConnection({
// //
// //   host: "localhost",
// //   user: "root",
// //   password: "root",
// //   database: "burgersapp_db"
// // });
//
// if (process.env.JAWSDB_URL) {
//   connection = mysl.createConnection(process.enc.JAWSDB_URL);
// } else {
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgersapp_db"
// });
//
// connection.connect(function(err){
//   if(err) {
//   console.log("error connecting: " + err.stack);
//   return;
// }
// console.log("connected as id: " + connection.threadId);
// });
//
// //export connection for our ORM to use
// module.exports = connection;
