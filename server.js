// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var config = require('./config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
    user: config.user,
    password: config.password,
    host: config.host,
    database: config.database
});
// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 4000; // Sets an initial port. We’ll use this later in our listener

// Run Morgan for Logging
// app.use(logger(“dev”));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: “application/vnd.api+json” }));

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
// Serve files created by create-react-app.
// app.use(express.static(“client/build”));

// -------------------------------------------------
//backend logic goes here
//first, a test query
app.get('/', function(req, res, next) {
    var onLoadQuery = "Select * from CaliforniaTinyHouses";
    connection.query(onLoadQuery, (error, results, fields) => {
        if (error) throw error;
        res.json(results)
    });
});

//get state info from zoning route
app.get('/zoning/:state', function(req, res) {
  var state = req.params.state;
  //get state info for California
  if (state === 'California') {
    var californiaQuery = "select * from CaliforniaTinyHouses";
    connection.query(californiaQuery, (error1, results1, fields1) => {
      if (error1) throw error;
      return res.json(results1)
    });
  }
  //get state info for Georgia
  else if (state === 'Georgia') {
    var georgiaQuery = "select * from GeorgiaTinyHouses";
    connection.query(georgiaQuery, (error2, results2, fields2) => {
      if (error2) throw error;
      return res.json(results2)
    });
  }
  //if state is neither GA nor CA, return an error
  else {
    return res.json({
        msg: "No information is available for the state requested."
    });
  }
});

//get professionals page
app.get('/professionals', function(req, res) {
  return res.json({
      msg: "professionals page"
  });
});

//get Homes page
app.get('/homes', function(req, res) {
  return res.json({
      msg: "Homes page"
  });
});

// -------------------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
