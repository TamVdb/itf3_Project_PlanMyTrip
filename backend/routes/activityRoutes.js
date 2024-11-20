const express = require('express');
const { addActivity, getActivities, deleteActivity, getActivity, updateActivity } = require('../controllers/activityController');
const { protect } = require('../middleware/authMiddleware');

const activityRoutes = express.Router();

activityRoutes.post('/:tripId/activity/add', protect, addActivity);
activityRoutes.get('/:tripId/activities/get', protect, getActivities);
activityRoutes.put('/:tripId/activity/update/:activityId', protect, updateActivity);
activityRoutes.delete('/:tripId/activity/delete/:activityId', protect, deleteActivity);
activityRoutes.get('/:tripId/activity/get/:activityId', protect, getActivity);

module.exports = activityRoutes;