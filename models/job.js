var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var general = require('../general');

var jobSchema = new Schema({
    title: {
        type: String,
        validate: /[\w\s]{8,}/
    },
    tags: {
        type: [String],
        validate: [general.validateJobTags, 'Must contain job tags']
    },
    creator: {
        type : ObjectId,
        ref : 'Users',
        required: true
    },
    description: {
        type: String,
        validate: /[\w\s]{20,}/
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        type: Number,
        required: true,
        validate: [general.validateLocation, 'Must be 5 digit zip']
    },
    postDate: {
        type: Number,
        required: true
    },
    earliestDate: {
        type: Number,
        required: true
    },
    latestDate: {
        type: Number,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('job', jobSchema);
