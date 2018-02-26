//reference to express and router
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//gt all of the burgers
router.get("/burgers", function(req,res){
  burger.selectAll(function(data){
    var handlebarsObj = {burgers: data};
    console.log(handlebarsObj);
    res.render('index', handlebarsObj);
  });
});

//update a new burger
router.put("/update/:id", function(req,res){
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(res) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// create a new burger
router.post("/burgers/create", function(req, res) {

    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function() {
        res.redirect("/burgers");
    });

});


module.exports = router;
