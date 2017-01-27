var mongoose = require('mongoose');
var Terminal = require('./terminal.js')

//create schema


var AirportSchema = new mongoose.Schema ({
  name: String,
  country: String,
  terminals: [Terminal],
  opened: Date
})

var Airport = mongoose.model('Airport', AirportSchema);
module.exports = Airport;

