var mongoose = require('mongoose');

//Create flight schema

var FlightSchema = new mongoose.Schema ({
  from: String,
  to: String,
  airline: String
})

var Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;
