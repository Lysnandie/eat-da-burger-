var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressHandlebars = require("express-handlebars");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

//use handlebars and set main page as layout
app.engine("handlebars", expressHandlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access to them
var routes = require("./controllers/routes.js");
app.use('/', routes);

app.listen(port);
console.log("App listening on port" + port);
