// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors')
require('dotenv').config()

// Environment Variables
const mongoURI = process.env.MONGODB_URI

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established.')
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Environment Variables (getting ready for Heroku)
const app = express();
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 
app.use(express.static('public')) 
app.use(cors())

// Routes
const noteController = require('./controllers/notes');
app.use('/notes', noteController);

app.listen(PORT, () => {
    console.log('Let\'s get things done on port', PORT)
})