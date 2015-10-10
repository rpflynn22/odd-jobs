var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var passportLocalMongoose = require('passport-local-mongoose');
var general = require('../general');

var userSchema = new Schema({
    username: {
        type: String,
        validate: /^[a-zA-Z0-9_-]{6,16}$/,
        unique: true
    },
    firstName: {
        type: String,
        validate: /^[a-zA-Z]{2,20}$/
    },
    lastName: {
        type: String,
        validate: /^[a-zA-Z]{2,20}$/
    },
    email: {
        type: String,
        validate: /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        unique: true
    },
    password: {
        type: String,
    },
    location: {
        type: Number,
        required: true,
        validate: [general.validateLocation, 'Must be 5 digit zip']
    },
    tsRegister: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    tags: {
        type: [String],
    },
    hirable: {
        type: Boolean,
        required: true
    },
    openJobs: [{type : ObjectId, ref: 'Jobs'}],
    closedJobs: [{type : ObjectId, ref: 'Jobs'}],
    numRatings: {
        type: Number,
        required: true
    },
    avgRating: {
        type: Number,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);
