const express = require('express'); // To create the server
const mongoose = require('mongoose'); // To connect to MongoDB
const cors = require('cors'); // To allow cross-origin requests
const dotenv = require('dotenv'); // To load environment variables from .env file
const users = require('./routes/userRoutes');

dotenv.config(); // Load environment variables from .env file
const app = express(); // Create an instance of express
app.use(express.json()); // To parse JSON in the request body
app.use(cors());

app.use('/api/users', users);

const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('Failed to connect to MongoDB:', err));


app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});