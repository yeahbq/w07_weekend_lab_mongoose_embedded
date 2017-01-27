var mongoose = require('mongoose');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

mongoose.connect("mongodb://localhost/weekend-flights");

var Flight = require('./models/flight');
var Airport = require('./models/airport');

var flight1 = new Flight({
  from: 'CDG France',
  to: 'JFK New-York, USA',
  airline: 'American Airlines',
  passengers: 0
})

var flight2 = new Flight({
  from: 'Heathrow UK',
  to: 'JFK New-York, USA',
  airline: 'British Airways',
  passengers: 0
})

// flight1.save();
// flight2.save();

var JFK = new Airport({
  name: 'JFK',
  country: 'USA',
  opened: '1990-4-20'
})

JFK.save();
//   - An airport called "JFK" in the USA opened on a random date in 1990.
//   - A terminal called "Terminal 1" `pushed` to airport1 with a capacity of 234324 and two flights: flight1 and flight2
