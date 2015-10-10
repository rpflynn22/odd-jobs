var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    location: Number,
    tsRegister: Number,
    description: String,
    tags: [String],
    hirable: Boolean,
    openJobs: [{type : ObjectId, ref : 'Jobs'}],
    closedJobs: [{type : ObjectId, ref : 'Jobs'}],
    numRatings: Number,
    avgRating: Number
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);
