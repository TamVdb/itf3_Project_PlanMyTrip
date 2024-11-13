const express = require('express');
const { addTrip, getTrips, updateTrip, deleteTrip } = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');

const tripRoutes = express.Router();

tripRoutes.post('/add', protect, addTrip);
tripRoutes.get('/get', protect, getTrips);
tripRoutes.put('/update/:id', protect, updateTrip);
tripRoutes.delete('/delete/:id', protect, deleteTrip);

module.exports = tripRoutes;