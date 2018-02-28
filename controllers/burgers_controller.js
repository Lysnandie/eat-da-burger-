//reference to express and router
var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();



//redirect to index route
router.get("/", function(req, res){
  res.redirect('/burgers');
})

// selects all burgers from table
router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var handlebarsObject = {
      burgers: data
    };
    console.log("handlebarsObject = " + handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

//add a burger
router.post("/burgers/create", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    // Send back the ID of the new burger
    // res.json({ id: result.insertId });
    res.redirect('/burgers');
  });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition = " + condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(res) {
    if (result.changedRows == 0) {
      // error check: if no rows were changed, then the ID must not exist, so 404 error
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
