const express = require('express'); // To create the server
const cors = require('cors'); // To allow cross-origin requests
const dotenv = require('dotenv'); // To load environment variables from .env file
dotenv.config(); // Load environment variables from .env file
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const port = process.env.PORT;

connectDB();

const app = express(); // Create an instance of express

app.use(express.json()); // To parse JSON in the request body
app.use(cors({
   origin: process.env.API_URL, // Allow requests from this origin
   credentials: true // To allow cookies
}));

// Call the users route
app.use('/api/users', userRoutes);


app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});