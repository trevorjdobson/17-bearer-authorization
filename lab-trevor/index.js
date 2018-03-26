'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv').config();


mongoose.connect('mongod://localhost/lab-17');





app.listen((req, res) => {
  console.log('llistening on port: ' + PORT);
});