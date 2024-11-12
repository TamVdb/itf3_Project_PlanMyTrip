const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
   },
   name: String,
   description: String,
   location: String,
   start_date: String,
   end_date: String,
   days: Number
});

const TripModel = mongoose.model('Trip', TripSchema);

module.exports = TripModel;