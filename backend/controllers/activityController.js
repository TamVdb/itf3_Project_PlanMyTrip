const express = require('express');
const TripModel = require('../models/TripModel');
const UserModel = require('../models/userModel');
const ActivityModel = require('../models/activityModel');

// @desc    Get activities
// @route   GET /api/activities
// @access  Private
const getActivities = async (req, res) => {
   try {
      const activities = await ActivityModel.find({ trip: req.trip._id });
      if (activities) {
         res.status(200).json(activities);
      }
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// @desc    Get activity
// @route   GET /api/activity/:id
// @access  Private
const getActivity = async (req, res) => {
   try {
      const activity = await ActivityModel.findById(req.params.id);
      if (!activity) {
         return res.status(404).json({ error: 'Activity not found' });
      }
      res.status(200).json(activity);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// @desc    Create a new activity
// @route   POST /api/activities/add
// @access  Private
const addActivity = async (req, res) => {
   try {
      // Fetch trip id 
      const tripId = req.params.tripId.toString();
      console.log(tripId);

      // Check if trip id is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(tripId)) {
         return res.status(400).json({ error: 'Invalid tripId format' });
      }


      // Check if trip exists
      const trip = await TripModel.findById(tripId);
      if (!trip) {
         return res.status(404).json({ error: 'Trip not found' });
      }

      const activity = await ActivityModel.create({ trip: tripId, ...req.body });
      res.status(200).json(activity);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// @desc    Update trip
// @route   PUT /api/trips/update/:id
// @access  Private
// const updateActivity = async (req, res) => {
//    try {
//       const tripId = req.params.id;

//       // Check if trip exists
//       const trip = await TripModel.findById(tripId);
//       // console.log("Trip id", tripId);
//       if (!trip) {
//          return res.status(404).json({ error: 'Trip not found' });
//       }

//       // Make sure the logged in user matches the trip user
//       if (trip.user.toString() !== req.user._id.toString()) {
//          return res.status(403).json({ error: 'Unauthorized: You do not own this trip' });
//       }

//       const updatedTrip = await TripModel.findByIdAndUpdate(tripId, req.body, { new: true });

//       // Réponse formatée avec `id` au lieu de `_id`
//       res.status(200).json({ id: tripId, updatedTrip });
//       // console.log("ID", tripId);
//       // console.log("Updated trip", updatedTrip);

//    } catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// };

// @desc    Delete trip
// @route   DELETE /api/trips/delete/:id
// @access  Private
const deleteActivity = async (req, res) => {
   try {
      const activity = await ActivityModel.findById(req.params.id);

      if (!activity) {
         return res.status(404).json({ error: 'Activity not found' });
      }

      const trip = await TripModel.findById(req.trip._id);

      // Check if trip exists
      if (!trip) {
         return res.status(401).json({ error: 'Trip not found' });
      }

      // Make sure activity id matches the trip id
      if (activity.trip.toString() !== trip._id.toString()) {
         return res.status(401).json({ error: 'Unauthorized' });
      }

      await activity.deleteOne();
      res.status(200).json({ id: req.params.id });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
   }
};


module.exports = { getActivities, getActivity, addActivity, deleteActivity };