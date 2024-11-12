const express = require('express');
const { addTrip, getTrips, updateTrip, deleteTrip } = require('../controllers/tripController');

const tripRoutes = express.Router();

tripRoutes.post('/add', addTrip);
tripRoutes.get('/', getTrips);
tripRoutes.put('/update/:id', updateTrip);
tripRoutes.delete('/delete/:id', deleteTrip);

module.exports = tripRoutes;