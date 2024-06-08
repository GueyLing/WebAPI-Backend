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
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World');
  });

// routes
app.use('/api/players', playerRoute);
app.use('/external-api', externalAPIRoutes);
app.use('/users', userRoute);

const port = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://gueyling:hgl25hgl@clustergl.w80d4ig.mongodb.net/WebAPIdb')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, '0.0.0.0', () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(err => console.error('Could not connect to MongoDB', err));