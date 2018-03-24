'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOD_URI);



let me = new User({
  username: 'me',
  email: '@.com',
  password: 'pass'
});
let you = new USer({
  username: 'you',
  email: '@.com',
  password: 'pass'
});
Promise.all([
  me.save(),
  you.save()
])
  .then(users => {
    let matrix = new MovieRating({
      title: "the matrix",
      rating: 10,
      userID: user._id
    });
    let equilibrium = new MovieRating({
      title: "equilibrium",
      rating: 10,
      userID: user._id
    });
    return Promise.all([
      matrix.save(),
      equilibrium.save()
    ])
      .then(() => {

      })
  });


