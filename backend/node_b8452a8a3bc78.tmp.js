const express = require('express'); // To create the server
const mongoose = require('mongoose'); // To connect to MongoDB
const cors = require('cors'); // To allow cross-origin requests
const dotenv = require('dotenv'); // To load environment variables from .env file
const session = require('express-session'); // To manage sessions
const MongoStore = require("connect-mongo"); // To store sessions in MongoDB
const users = require('./routes/userRoutes');

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT;
const BACKEND_URL = process.env.MONGO_URL;
const FRONTEND_URL = process.env.API_URL;
const SESSION_KEY = process.env.SESSION_SECRET;

const app = express(); // Create an instance of express
app.use(express.json()); // To parse JSON in the request body
app.use(cors({
   origin: FRONTEND_URL, // Allow requests from this origin
   credentials: true // To allow cookies
}));

app.use(session({
   secret: SESSION_KEY,
   resave: false, // Don't save session if it's unmodified
   saveUninitialized: false, // Create session only for connected users
   store: MongoStore.create({ mongoUrl: BACKEND_URL }),
   cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Call the users route
app.use('/api/users', users);

// Connect to MongoDB
mongoose.connect(BACKEND_URL)
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('Failed to connect to MongoDB:', err));


app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});