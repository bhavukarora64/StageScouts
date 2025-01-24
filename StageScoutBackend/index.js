const express = require('express');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const stadiumRoute = require('./routes/StadiumRoutes')
const imageRoute = require('./routes/imageRoutes')
const {userAuth} = require('./middlewares/userAuth');
const dbMiddleware = require('./middlewares/dbConnection.js')
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ["https://stage-scouts-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }));

app.options('*', cors());

app.use(dbMiddleware);
app.use(bodyParser.json());

app.use('/api/auth', authRoutes)
app.use('/api/stadium', stadiumRoute)
app.use('/api/image', imageRoute)
app.use('/me', userAuth, authRoutes);

app.listen(3000, function() {
    console.log("Server is live on localhost:3000");
});