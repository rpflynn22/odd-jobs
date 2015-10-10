var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var jobSchema = new Schema({
    title: String,
    tags: [String],
    creator: {type : ObjectId, ref : 'Users'},
    description: String,
    salary: Number,
    location: Number,
    postDate: Number,
    earliestDate: Number,
    latestDate: Number,
    isOpen: Boolean
});

module.exports = mongoose.model('Jobs', jobSchema);
