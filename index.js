// cons express = require('express'); -> commonjs module -> outdated

import express from  'express'; // -> es module -> latest 
import connectDB from './config/database.js'; // import the connectDB function from database.js 

//import dotenv from 'dotenv';

//dotenv.config(); old approach to load .env variables

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

app.get('/', helloworldnew);

connectDB();

app.listen(port, () => {
  console.log(`Example app is listening at http://localhost:${port}`);
});