const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/player.model');
const playerRoute = require('./routes/player.route.js');
const session = require('express-session');
const externalAPIRoutes = require('./routes/externalAPI.route');
const userRoute = require('./routes/user.route');
const cors = require('cors');
const app = express();

// middleware
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
  });

// routes
app.use('/api/players', playerRoute);
app.use('/external-api', externalAPIRoutes);
app.use('/users', userRoute);


mongoose.connect('mongodb+srv://gueyling:hgl25hgl@clustergl.w80d4ig.mongodb.net/WebAPIdb')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(err => console.error('Could not connect to MongoDB', err));