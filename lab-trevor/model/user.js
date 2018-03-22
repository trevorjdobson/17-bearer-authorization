
const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const userSchema = Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});


const MovieRating = Schema({
    userId: {
        type: Schema.types.ObjectId,
        require: true
    },
    rating: {type: Number, min: 1, max: 10},
    title: {type: String},
});

module.exports = mongoose.model('MovieRating', MovieRating)