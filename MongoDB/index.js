const mongoose = require("mongoose");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// Environment Declaration
const DB_URL = "";
const DB_USRNAME = "";
const DB_PWD = "";

const port = process.env.PORT || 3000;

// Initialization connection.

try {
  mongoose.connect(`mongodb://${DB_USRNAME}:${DB_PWD}@${DB_URL}`, {
    useNewUrlParser: true,
  });
  console.log("Connection to MongoDB is established!")
  
} catch (e) {
	console.log("Could not connect to MongodDB: ", e.name);
}

//Assign Route to express.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./restapi/routes/customer');
routes(app);

app.use(async (req, res) => {
	//Access to customers collection.
	res.status(404).send({url: req.originalUrl + ' not found'});

})

app.listen(port);
console.log('MongoDB Locally -  RESTful web services with Nodejs started on: ' + port);