var mongoose = require('mongoose');

//create passenger schema

var PassengerSchema = new mongoose.Schema ({
  firstName: String,
  lastName: String,
  dob: Date
})

var Passenger = mongoose.model('Passenger', PassengerSchema);

module.exports = Passenger;
