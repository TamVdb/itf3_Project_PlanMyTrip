const express = require('express');
const bcrypt = require('bcrypt'); // For hashing passwords
const UserModel = require('../models/userModel');

let userRoutes = express.Router();

//#1 - Create a User
userRoutes.post('/signup', async (req, res) => {
   try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const userObject = {
         username: req.body.username,
         email: req.body.email,
         password: hashedPassword
      };
      const existingUser = await UserModel.findOne({ email: userObject.email });
      if (existingUser) {
         return res.status(400).json({ error: 'Email already exists' });
      }
      const newUser = new UserModel(userObject);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
   } catch (error) {
      console.error('Erreur lors de la création de l’utilisateur :', error);
      res.status(500).json({ error: error.message });
   }
});

//#2 - Login
userRoutes.post('/login', async (req, res) => {
   try {
      const { username, password } = req.body;

      const user = await UserModel.findOne({ username });

      if (user) {
         const passwordMatch = await bcrypt.compare(password, user.password);
         if (passwordMatch) {
            // Store user in session and send to the frontend
            req.session.user = { id: user._id, username: user.username, email: user.email };
            res.json('Success');
         } else {
            res.status(401).json('Password doesn\'t match');
         }
      } else {
         res.status(404).json('No Records found');
      }
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

//#3 - Read a User
userRoutes.get('/user', (req, res) => {
   // Check if user is authenticated
   if (req.session.user) {
      res.json({ user: req.session.user }); // Return user data
   } else {
      res.status(401).json('Not authenticated');
   }
});


module.exports = userRoutes;