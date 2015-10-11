var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var general = require('../general');

var jobSchema = new Schema({
  title: {
    type: String,
    validate: /[\w\s]{4,}/
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
    validate: /[\w\s]{10,}/
  },
  salary: {
    type: Number,
    required: true
  },
  loc: {
    type: [Number],
    index: '2d',
    required: true
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
