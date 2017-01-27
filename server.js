var mongoose = require('mongoose');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

mongoose.connect("mongodb://localhost/weekend-flights");

var Flight = require('./models/flight')

var flight1 = new Flight({
  from: 'CDG France',
  to: 'JFK New-York',
  airline: 'American Airlines'
})

flight1.save();
// - Hard code the following data in `server.js`:

//   - A flight from CDG France to JFK New-York, USA on American Airlines with no passengers.  The name of the flight is "flight1"
//   - A second flight from Heathrow UK to JFK New-York, USA on British Airways with no passengers.  The name of the flight is "flight2"
//   - An airport called "JFK" in the USA opened on a random date in 1990.
//   - A terminal called "Terminal 1" `pushed` to airport1 with a capacity of 234324 and two flights: flight1 and flight2
