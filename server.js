// Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// PORT
const PORT = process.env.PORT || 4000;

//Middleware -------
const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./Develop/public'));

// ROUTES
app.use(require('./routes/routes_api.js'));
app.use(require('./routes/routes_html.js'));

// START SERVER
app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}!`);
});


//Routes API, Get ROUTES add APIS/ WORKOUT/RANGE

//CREATE ROUTES FOR THAT SO i CAN SEE WORKOUTS ON THE STATS 

//sHOUDL BE SET AFTER THAT
