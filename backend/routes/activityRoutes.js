const express = require('express');
const { addActivity, getActivities, deleteActivity, getActivity } = require('../controllers/activityController');
const { protect } = require('../middleware/authMiddleware');

const activityRoutes = express.Router();

activityRoutes.post('/:tripId/add', protect, addActivity);
activityRoutes.get('/:tripId/get', protect, getActivities);
// activityRoutes.put('/update/:id', protect, updateActivity);
activityRoutes.delete('/:tripId/delete/:activityId', protect, deleteActivity);
activityRoutes.get('/:tripId/get/:activityId', protect, getActivity);

module.exports = activityRoutes;