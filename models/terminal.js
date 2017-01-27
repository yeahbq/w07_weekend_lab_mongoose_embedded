var mongoose = require('mongoose');

//create schema

var TerminalSchema = new mongoose.Schema ({
  name: String,
  flights:[FlightSchema],
  capacity: Number
})

var Terminal = mongoose.model('Terminal', TerminalSchema)

module.exports = Terminal;
