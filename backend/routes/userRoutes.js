const express = require('express');
const { registerUser, loginUser, logoutUser, getUser } = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.post('/signup', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.post('/logout', logoutUser);
userRoutes.get('/user', getUser);

module.exports = userRoutes;