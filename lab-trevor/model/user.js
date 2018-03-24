'use strict';


const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const userSchema = Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const todoList = Schema({
  userId: {
    type: Schema.types.ObjectId,
    require: true
  },
  title: { type: String },
  alottedTime: { type: String} 
});


module.exports = mongoose.model('todoList', todoList);
module.exports = mongoose.model('userSchema', userSchema);