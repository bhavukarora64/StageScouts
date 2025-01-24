const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const stadiumRoute = require('./routes/StadiumRoutes');
const imageRoute = require('./routes/imageRoutes');
const { userAuth } = require('./middlewares/userAuth');
const dbMiddleware = require('./middlewares/dbConnection.js');

const app = express();

// Enable CORS for the frontend URL
app.use(cors({
    origin: 'https://stage-scouts-frontend.vercel.app', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],    // Allowed headers
    credentials: true, // Include credentials if needed (e.g., cookies, Authorization headers)
}));

// Handle preflight requests
app.options('*', cors()); // Ensures all OPTIONS requests are responded to

// Middleware to parse request bodies
app.use(bodyParser.json());

// Middleware for database connection
app.use(dbMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stadium', stadiumRoute);
app.use('/api/image', imageRoute);
app.use('/me', userAuth, authRoutes);

// Start the server
app.listen(3000, function () {
    console.log("Server is live on http://localhost:3000");
});
