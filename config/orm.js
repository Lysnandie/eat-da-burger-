var connection = require("../config/connection.js");


function makeQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


function objectTomySql(ob) {
  var arr = [];
//loop through and push into array
  for (var key in ob) {
    var value = ob[key];

    // check to skip any hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {

      // if the string has spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  // then translate the array of strings to a single comma-separated string
  return arr.toString();
}

//cb is async call
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, columns, values, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += makeQuestionMarks(values.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColumnValue would be only {name: chicken},
  // since the column devoured is defaulted to false
  updateOne: function(table, objColumnValue, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objectTomySql(objColumnValue);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
