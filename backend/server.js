const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
require('dotenv').config();

const app = express(); // Create an instance of express
app.use(express.json()); // To parse JSON in the request body
app.use(cors()); // To allow cross-origin requests

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;
// Create a new MongoClient instance
const client = new MongoClient(URL);

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});


app.post('/signup', async (req, res) => {
   try {
      await client.connect();
      const database = client.db('planmytrip');
      const usersCollection = database.collection('users');

      // Hash password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = {
         username: req.body.username,
         email: req.body.email,
         password: hashedPassword
      };

      const savedUser = await usersCollection.insertOne(newUser);

      // const existingUser = await UserModel.findOne({ email });
      // if (existingUser) {
      //    return res.status(400).json({ error: "Email already exists" });
      // 

      res.status(201).json(savedUser);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});