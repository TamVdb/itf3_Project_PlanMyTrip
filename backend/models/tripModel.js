const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
   name: String,
   description: String,
   location: String,
   start_date: String,
   end_date: String,
   days: Number
});

const TripModel = mongoose.model('trips', TripSchema);

module.exports = TripModel;