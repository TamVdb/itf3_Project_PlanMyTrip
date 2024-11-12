const express = require('express');
const TripModel = require('../models/TripModel');

// @desc    Get trips
// @route   GET /api/trips
// @access  Private
const getTrips = async (req, res) => {
   try {
      const trips = await TripModel.find({ user: req.user._id });
      if (trips) {
         res.status(200).json(trips);
      }
   } catch (error) {
      res.status(500).json({ error: 'Erreur interne' });
   }
};

// @desc    Create a new trip
// @route   POST /api/trips/add
// @access  Public
const addTrip = async (req, res) => {
   try {
      const trip = await TripModel.create({ user: req.user._id, ...req.body });
      res.status(200).json(trip);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// @desc    Update trip
// @route   PUT /api/trips/update/:id
// @access  Private
const updateTrip = async (req, res) => {
   try {
      const trip = await TripModel.findById(req.params.id);

      if (!trip) {
         return res.status(404).json({ error: 'Trip not found' });
      }

      const user = await UserModel.findById(req.user._id);

      // Check if user exists
      if (!user) {
         return res.status(401).json({ error: 'User not found' });
      }

      // Make sure the logged in user matches the trip user
      if (trip.user.toString() !== user._id.toString()) {
         return res.status(401).json({ error: 'Unauthorized' });
      }

      const updatedTrip = await TripModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedTrip);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// @desc    Delete trip
// @route   DELETE /api/trips/delete/:id
// @access  Private
const deleteTrip = async (req, res) => {
   try {
      const trip = await TripModel.findById(req.params.id);

      if (!trip) {
         return res.status(404).json({ error: 'Trip not found' });
      }

      const user = await UserModel.findById(req.user._id);

      // Check if user exists
      if (!user) {
         return res.status(401).json({ error: 'User not found' });
      }

      // Make sure the logged in user matches the trip user
      if (trip.user.toString() !== user._id.toString()) {
         return res.status(401).json({ error: 'Unauthorized' });
      }

      await trip.remove();
      res.status(200).json({ id: req.params.id });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

module.exports = { addTrip, getTrips, updateTrip, deleteTrip };