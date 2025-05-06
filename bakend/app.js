// app.js
const express = require('express');
const morgan = require('morgan'); // for logging
const cors = require('cors'); // for enabling CORS
const helmet = require('helmet'); // for security headers
const connectDb = require('./config/db.config');
const router = require('./routers');
require('dotenv').config();

const app = express();
connectDb ();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api', router);
app.get('/', (req, res)=>{
 res.json({
  message:"welcome",
 }); 
});

// Error Handling Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
