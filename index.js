// cons express = require('express'); -> commonjs module -> outdated

import express from  'express'; // -> es module -> latest 
import connectDB from './config/database.js'; // import the connectDB function from database.js 

//import dotenv from 'dotenv';

//dotenv.config(); old approach to load .env variables

import HANDLERS from './handlers/index.js'; // import the handlers from index.js
import errorMiddleware from './middlewares/error.js'; // import the error middleware from error.js

const app = express();

const port = process.env.PORT ;

// old approach
function helloworldold(req,res) {
  res.send('Hello World!');
}

// new approach
// named function
const helloworldnew = (req,res) => {
  res.send('Hello Ankit coding World!');
};

//app.get('/', (req, res) => {
  //res.send('Hello, World!');
//});

//helloworldold();

// app.get('/', helloworldnew);

connectDB();

app.use(express.json()); // middleware to parse incoming JSON requests
app.use('/', HANDLERS); // use the handlers for all routes
app.use(errorMiddleware); // use the error middleware for all routes


app.listen(port, () => {
  console.log(`Example app is listening at http://localhost:${port}`);
});