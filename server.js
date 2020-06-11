const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())

// Connect Database
const {
    mongoose
} = require('./db/database')

// Const Global 
global.__root = __dirname + '/'

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the home page route
app.get('/', function (req, res) {
	// ejs render automatically looks in the views folder
	res.render('index');
});

// Routes
app.use('/api/v1', require(__root + 'routes/Employees'))
app.use('/api/v1', require(__root + 'routes/Products'))

module.exports = app