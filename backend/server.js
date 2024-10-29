const connect = require('./connect');
const express = require('express');
const cors = require("cors");
require('dotenv').config();
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, async () => {
   await connect.connectToServer();
   console.log(`Server is running on port ${process.env.PORT}`);
});





// app.post("/signup", async (req, res) => {
//    try {
//       const { username, email, password } = req.body;
//       const existingUser = await UserModel.findOne({ email });
//       if (existingUser) {
//          return res.status(400).json({ error: "Email already exists" });
//       }
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = new UserModel({ username, email, passworrequire('dotenv').config();d: hashedPassword });
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser);
//    } catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// });